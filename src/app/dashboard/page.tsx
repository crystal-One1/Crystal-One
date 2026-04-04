"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface User {
  id: string;
  phoneNumber: string;
  name: string | null;
  role: string;
  balance: number;
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      fetchUserData();
    }
  }, [status, router]);

  const fetchUserData = async () => {
    try {
      const res = await fetch("/api/user");
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  const isAdmin = user?.role === "ADMIN";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="bg-white/5 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/profile" className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            TaskHub
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-white/80">{user?.name || user?.phoneNumber}</span>
            {user?.balance !== undefined && (
              <span className="px-4 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold">
                ${user.balance.toFixed(2)}
              </span>
            )}
            {isAdmin && (
              <Link href="/admin" className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium">
                Admin Panel
              </Link>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6">
        {isAdmin ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Total Users</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">View in Panel</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Pending Deposits</h3>
              <p className="text-3xl font-bold text-yellow-400">View in Panel</p>
            </div>
            <div className="bg-gradient-to-br from-pink-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Pending Withdrawals</h3>
              <p className="text-3xl font-bold text-orange-400">View in Panel</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Your Balance</h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                ${user?.balance?.toFixed(2) || "0.00"}
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Your Referrals</h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">0</p>
            </div>
          </div>
        )}

        <div className="mt-8 bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h2 className="text-xl font-semibold text-white mb-4">Account Info</h2>
          <div className="space-y-3">
            <p className="text-white/60">
              Phone: <span className="text-white">{user?.phoneNumber}</span>
            </p>
            <p className="text-white/60">
              Name: <span className="text-white">{user?.name || "Not set"}</span>
            </p>
            <p className="text-white/60">
              Role: <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{user?.role}</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}