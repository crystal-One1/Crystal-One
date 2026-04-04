"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  const isAdmin = user?.role === "ADMIN";

  return (
    <div className="min-h-screen bg-neutral-900">
      <nav className="bg-neutral-800 border-b border-neutral-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">
            {isAdmin ? "Admin Dashboard" : "User Dashboard"}
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-neutral-300">{user?.name || user?.phoneNumber}</span>
            {user?.balance !== undefined && (
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                ${user.balance.toFixed(2)}
              </span>
            )}
            {isAdmin && (
              <a href="/admin" className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400">
                Admin Panel
              </a>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6">
        {isAdmin ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
              <h3 className="text-lg font-semibold text-white mb-2">Total Users</h3>
              <p className="text-3xl font-bold text-indigo-400">View in Panel</p>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
              <h3 className="text-lg font-semibold text-white mb-2">Pending Deposits</h3>
              <p className="text-3xl font-bold text-yellow-400">View in Panel</p>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
              <h3 className="text-lg font-semibold text-white mb-2">Pending Withdrawals</h3>
              <p className="text-3xl font-bold text-orange-400">View in Panel</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
              <h3 className="text-lg font-semibold text-white mb-2">Your Balance</h3>
              <p className="text-3xl font-bold text-green-400">
                ${user?.balance?.toFixed(2) || "0.00"}
              </p>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
              <h3 className="text-lg font-semibold text-white mb-2">Your Referrals</h3>
              <p className="text-3xl font-bold text-indigo-400">0</p>
            </div>
          </div>
        )}

        <div className="mt-8 bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-xl font-semibold text-white mb-4">Account Info</h2>
          <div className="space-y-3">
            <p className="text-neutral-400">
              Phone: <span className="text-white">{user?.phoneNumber}</span>
            </p>
            <p className="text-neutral-400">
              Name: <span className="text-white">{user?.name || "Not set"}</span>
            </p>
            <p className="text-neutral-400">
              Role: <span className="text-white">{user?.role}</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}