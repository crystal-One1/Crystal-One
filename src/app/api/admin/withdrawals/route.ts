import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

async function requireAdmin() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return { error: true, status: 401 };
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  if (!user || user.role !== "ADMIN") {
    return { error: true, status: 403 };
  }

  return { user, error: false };
}

export async function GET() {
  const adminCheck = await requireAdmin();
  if (adminCheck.error) {
    return NextResponse.json({ error: "غير مصرح" }, { status: adminCheck.status });
  }

  try {
    const withdrawals = await prisma.withdrawal.findMany({
      include: {
        user: {
          select: { name: true, email: true, phoneNumber: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(
      withdrawals.map((w) => ({
        id: w.id,
        amount: w.amount,
        transferToNumber: w.transferToNumber,
        status: w.status,
        createdAt: w.createdAt.toISOString(),
        userName: w.user.name,
        userEmail: w.user.email,
        userPhone: w.user.phoneNumber,
      }))
    );
  } catch (error) {
    console.error("Error fetching withdrawals:", error);
    return NextResponse.json({ error: "خطأ في الخادم" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const adminCheck = await requireAdmin();
  if (adminCheck.error) {
    return NextResponse.json({ error: "غير مصرح" }, { status: adminCheck.status });
  }

  try {
    const { id, action } = await req.json();

    const withdrawal = await prisma.withdrawal.findUnique({ where: { id } });
    if (!withdrawal) {
      return NextResponse.json({ error: "السحب غير موجود" }, { status: 404 });
    }

    const newStatus = action === "approve" ? "APPROVED" : "REJECTED";

    if (action === "reject") {
      await prisma.user.update({
        where: { id: withdrawal.userId },
        data: { balance: { increment: withdrawal.amount } },
      });
    }

    await prisma.withdrawal.update({
      where: { id },
      data: { status: newStatus },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating withdrawal:", error);
    return NextResponse.json({ error: "خطأ في الخادم" }, { status: 500 });
  }
}