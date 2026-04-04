import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"
import crypto from "crypto"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { phoneNumber, password, name, invitationCode } = body

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
    const referralCode = crypto.randomBytes(4).toString('hex').toUpperCase()

    let referredByCode: string | null = null

    if (invitationCode) {
      const referrer = await prisma.user.findUnique({
        where: { referralCode: invitationCode.toUpperCase() }
      })
      if (referrer) {
        referredByCode = invitationCode.toUpperCase()
      }
    }

    const user = await prisma.user.create({
      data: {
        phoneNumber,
        passwordHash,
        name,
        referralCode,
        referredByCode,
        isVerified: true
      },
      select: {
        id: true,
        phoneNumber: true,
        name: true,
        referralCode: true,
        referredByCode: true
      }
    })

    // Create referral reward record if referred
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

    // Assign free store automatically
    await prisma.userStore.upsert({
      where: {
        userId_storeId: {
          userId: user.id,
          storeId: 1
        }
      },
      update: {},
      create: {
        userId: user.id,
        storeId: 1,
        isActive: true
      }
    })

    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
