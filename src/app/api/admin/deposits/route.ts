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
    const deposits = await prisma.deposit.findMany({
      include: {
        user: {
          select: { name: true, email: true, phoneNumber: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(
      deposits.map((d) => ({
        id: d.id,
        amount: d.amount,
        transferNumber: d.transferNumber,
        status: d.status,
        createdAt: d.createdAt.toISOString(),
        userName: d.user.name,
        userEmail: d.user.email,
        userPhone: d.user.phoneNumber,
      }))
    );
  } catch (error) {
    console.error("Error fetching deposits:", error);
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

    const deposit = await prisma.deposit.findUnique({ where: { id } });
    if (!deposit) {
      return NextResponse.json({ error: "الإيداع غير موجود" }, { status: 404 });
    }

    const newStatus = action === "approve" ? "APPROVED" : "REJECTED";

    if (action === "approve") {
      await prisma.user.update({
        where: { id: deposit.userId },
        data: { balance: { increment: deposit.amount } },
      });
    }

    await prisma.deposit.update({
      where: { id },
      data: { status: newStatus },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating deposit:", error);
    return NextResponse.json({ error: "خطأ في الخادم" }, { status: 500 });
  }
}