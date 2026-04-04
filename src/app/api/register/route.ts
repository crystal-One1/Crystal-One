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

  const { phoneNumber, password, name } = body || {}

  if (!phoneNumber || !password) {
    return NextResponse.json({ error: "المعلومات المطلوبة ناقصة" }, { status: 400 })
  }

  const cleanPhone = phoneNumber.toString().trim()
  const cleanPassword = password.toString().trim()
  const cleanName = name?.toString().trim() || "مستخدم"

  try {
    const existing = await prisma.user.findUnique({ where: { phoneNumber: cleanPhone } })
    if (existing) {
      return NextResponse.json({ error: "هذا الرقم مسجل بالفعل" }, { status: 409 })
    }

    const hash = bcrypt.hashSync(cleanPassword, 10)
    const refCode = crypto.randomBytes(4).toString("hex").toUpperCase()

    const user = await prisma.user.create({
      data: {
        phoneNumber: cleanPhone,
        passwordHash: hash,
        name: cleanName,
        referralCode: refCode,
        isVerified: true,
        role: "USER",
        balance: 0
      }
    })

    return NextResponse.json(
      { success: true, message: "تم إنشاء الحساب بنجاح", phone: user.phoneNumber },
      { status: 201 }
    )
  } catch (err: any) {
    console.error("Error:", err)
    return NextResponse.json({ error: err.message || "خطأ في الخادم" }, { status: 500 })
  }
}