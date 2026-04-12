import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "غير مصرح" }, { status: 401 });
    }

    const body = await req.json();
    const { phoneNumber } = body;

    if (!phoneNumber) {
      return NextResponse.json({ error: "رقم الهاتف مطلوب" }, { status: 400 });
    }

    const user = await prisma.user.update({
      where: { id: session.user.id },
      data: { phoneNumber: phoneNumber.trim() },
    });

    return NextResponse.json({ success: true, phoneNumber: user.phoneNumber });
  } catch (error) {
    console.error("Error updating phone:", error);
    return NextResponse.json({ error: "خطأ في الخادم" }, { status: 500 });
  }
}