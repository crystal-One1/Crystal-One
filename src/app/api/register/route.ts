import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"
import crypto from "crypto"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { phoneNumber, password, name, referralCode } = body

    if (!phoneNumber || !password) {
      return NextResponse.json(
        { error: "Phone number and password are required" },
        { status: 400 }
      )
    }

    const existingUser = await prisma.user.findUnique({
      where: { phoneNumber }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: "Phone number already registered" },
        { status: 409 }
      )
    }

    const passwordHash = await bcrypt.hash(password, 12)
    const userReferralCode = crypto.randomBytes(4).toString('hex').toUpperCase()

    let referredByCode: string | null = null

    if (referralCode) {
      const referrer = await prisma.user.findUnique({
        where: { referralCode: referralCode.toUpperCase() }
      })
      if (referrer) {
        referredByCode = referralCode.toUpperCase()
      }
    }

    const user = await prisma.user.create({
      data: {
        phoneNumber,
        passwordHash,
        name: name || null,
        referralCode: userReferralCode,
        referredByCode,
        isVerified: true,
        role: "USER",
        balance: 0
      },
      select: {
        id: true,
        phoneNumber: true,
        name: true,
        referralCode: true,
        referredByCode: true
      }
    })

    if (referredByCode) {
      const referrer = await prisma.user.findUnique({
        where: { referralCode: referredByCode }
      })
      if (referrer) {
        await prisma.referralReward.create({
          data: {
            referrerId: referrer.id,
            referredId: user.id,
            amount: 10,
            status: "PENDING"
          }
        })
      }
    }

    const store = await prisma.store.findFirst({
      where: { isActive: true }
    })

    if (store) {
      await prisma.userStore.create({
        data: {
          userId: user.id,
          storeId: store.id,
          isActive: true
        }
      })
    }

    return NextResponse.json(user, { status: 201 })
  } catch (error: any) {
    console.error("Registration error:", error)
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    )
  }
}