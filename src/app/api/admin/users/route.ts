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
    const users = await prisma.user.findMany({
      select: {
        id: true,
        phoneNumber: true,
        name: true,
        role: true,
        balance: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}