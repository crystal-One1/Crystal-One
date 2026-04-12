import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"
import crypto from "crypto"

export async function POST(request: Request) {
  let body = null
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const { username, email, password, confirmPassword, referralCode } = body || {}

  if (!username || !email || !password) {
    return NextResponse.json({ error: "يرجى ملء جميع الحقول المطلوبة" }, { status: 400 })
  }

  if (password !== confirmPassword) {
    return NextResponse.json({ error: "كلمات المرور غير متطابقة" }, { status: 400 })
  }

  if (password.length < 6) {
    return NextResponse.json({ error: "كلمة المرور يجب أن تكون 6 أحرف على الأقل" }, { status: 400 })
  }

  const cleanUsername = username.toString().trim()
  const cleanEmail = email.toString().trim().toLowerCase()
  const cleanPassword = password.toString().trim()

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { name: cleanUsername },
          { email: cleanEmail }
        ]
      }
    })

    if (existingUser) {
      if (existingUser.name === cleanUsername) {
        return NextResponse.json({ error: "اسم المستخدم مسجل بالفعل" }, { status: 409 })
      }
      if (existingUser.email === cleanEmail) {
        return NextResponse.json({ error: "البريد الإلكتروني مسجل بالفعل" }, { status: 409 })
      }
    }

    const hash = bcrypt.hashSync(cleanPassword, 10)
    const refCode = crypto.randomBytes(4).toString("hex").toUpperCase()

    const user = await prisma.user.create({
      data: {
        name: cleanUsername,
        email: cleanEmail,
        passwordHash: hash,
        referralCode: refCode,
        phoneNumber: null,
        isVerified: true,
        role: "USER",
        balance: 0
      }
    })

    return NextResponse.json(
      { 
        success: true, 
        message: "تم إنشاء الحساب بنجاح", 
        username: user.name,
        email: user.email 
      },
      { status: 201 }
    )
  } catch (err: any) {
    console.error("Error:", err)
    return NextResponse.json({ error: err.message || "خطأ في الخادم" }, { status: 500 })
  }
}