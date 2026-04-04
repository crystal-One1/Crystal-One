import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

async function requireAdmin() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.phoneNumber) {
    return { error: true, status: 401 };
  }

  const user = await prisma.user.findUnique({
    where: { phoneNumber: session.user.phoneNumber },
  });

  if (!user || user.role !== "ADMIN") {
    return { error: true, status: 403 };
  }

  return { user, error: false };
}

export async function GET() {
  const adminCheck = await requireAdmin();
  if (adminCheck.error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: adminCheck.status });
  }

  try {
    const deposits = await prisma.deposit.findMany({
      include: {
        user: {
          select: { phoneNumber: true, name: true },
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
        userPhone: d.user.phoneNumber,
      }))
    );
  } catch (error) {
    console.error("Error fetching deposits:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const adminCheck = await requireAdmin();
  if (adminCheck.error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: adminCheck.status });
  }

  try {
    const { id, action } = await req.json();

    const deposit = await prisma.deposit.findUnique({ where: { id } });
    if (!deposit) {
      return NextResponse.json({ error: "Deposit not found" }, { status: 404 });
    }

    const newStatus = action === "approve" ? "APPROVED" : "REJECTED";

    if (action === "approve") {
      const user = await prisma.user.update({
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
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}