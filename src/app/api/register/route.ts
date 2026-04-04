import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"
import crypto from "crypto"

export async function POST(request: Request) {
  try {
    let body
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON format" },
        { status: 400 }
      )
    }

    const { phoneNumber, password, name } = body || {}

    if (!phoneNumber || typeof phoneNumber !== "string") {
      return NextResponse.json(
        { error: "رقم الهاتف مطلوب" },
        { status: 400 }
      )
    }

    if (!password || typeof password !== "string" || password.length < 6) {
      return NextResponse.json(
        { error: "كلمة المرور يجب أن تكون 6 أحرف على الأقل" },
        { status: 400 }
      )
    }

    const cleanPhone = phoneNumber.trim()

    const existingUser = await prisma.user.findUnique({
      where: { phoneNumber: cleanPhone }
    }).catch(() => null)

    if (existingUser) {
      return NextResponse.json(
        { error: "رقم الهاتف مسجل بالفعل" },
        { status: 409 }
      )
    }

    const passwordHash = await bcrypt.hash(password, 10).catch(() => null)
    if (!passwordHash) {
      return NextResponse.json(
        { error: "خطأ في تشفير كلمة المرور" },
        { status: 500 }
      )
    }

    const referralCode = crypto.randomBytes(4).toString("hex").toUpperCase()

    const user = await prisma.user.create({
      data: {
        phoneNumber: cleanPhone,
        passwordHash,
        name: name?.trim() || null,
        referralCode,
        isVerified: true,
        role: "USER",
        balance: 0
      }
    }).catch((err) => {
      console.error("Create user error:", err)
      throw new Error("Failed to create user")
    })

    return NextResponse.json(
      {
        id: user.id,
        phoneNumber: user.phoneNumber,
        name: user.name,
        referralCode: user.referralCode,
        message: "تم إنشاء الحساب بنجاح"
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error("Registration error:", error)
    return NextResponse.json(
      { error: error.message || "حدث خطأ في الخادم" },
      { status: 500 }
    )
  }
}