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

interface Deposit {
  id: string;
  amount: number;
  transferNumber: string;
  status: string;
  createdAt: string;
}

interface Withdrawal {
  id: string;
  amount: number;
  transferToNumber: string;
  status: string;
  createdAt: string;
}

export default function AdminDashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [deposits, setDeposits] = useState<Deposit[]>([]);
  const [withdrawals, setWithdrawals] = useState<Withdrawal[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("users");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      checkAdminAndFetch();
    }
  }, [status, router]);

  const checkAdminAndFetch = async () => {
    try {
      const res = await fetch("/api/user");
      const user = await res.json();
      if (user.role !== "ADMIN") {
        router.push("/dashboard");
        return;
      }
      fetchData();
    } catch (error) {
      router.push("/login");
    }
  };

  const fetchData = async () => {
    try {
      const [usersRes, depositsRes, withdrawalsRes] = await Promise.all([
        fetch("/api/admin/users"),
        fetch("/api/admin/deposits"),
        fetch("/api/admin/withdrawals"),
      ]);

      if (usersRes.ok) setUsers(await usersRes.json());
      if (depositsRes.ok) setDeposits(await depositsRes.json());
      if (withdrawalsRes.ok) setWithdrawals(await withdrawalsRes.json());
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (type: "deposit" | "withdrawal", id: string, action: "approve" | "reject") => {
    try {
      await fetch(`/api/admin/${type}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, action }),
      });
      fetchData();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="bg-white/5 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Admin Control Panel
          </h1>
          <div className="flex gap-4">
            <Link href="/dashboard" className="text-white/80 hover:text-white">User Dashboard</Link>
            <Link href="/profile" className="text-white/80 hover:text-white">Home</Link>
            <button onClick={() => router.push("/api/auth/signout")} className="text-red-400 hover:text-red-300">
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("users")}
            className={`px-4 py-2 rounded-xl transition ${activeTab === "users" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "bg-white/10 text-white/80 hover:bg-white/20"}`}
          >
            Users ({users.length})
          </button>
          <button
            onClick={() => setActiveTab("deposits")}
            className={`px-4 py-2 rounded-xl transition ${activeTab === "deposits" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "bg-white/10 text-white/80 hover:bg-white/20"}`}
          >
            Deposits ({deposits.filter(d => d.status === "PENDING").length} pending)
          </button>
          <button
            onClick={() => setActiveTab("withdrawals")}
            className={`px-4 py-2 rounded-xl transition ${activeTab === "withdrawals" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "bg-white/10 text-white/80 hover:bg-white/20"}`}
          >
            Withdrawals ({withdrawals.filter(w => w.status === "PENDING").length} pending)
          </button>
        </div>

        {activeTab === "users" && (
          <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-4 py-3 text-left text-white/80">Phone</th>
                  <th className="px-4 py-3 text-left text-white/80">Name</th>
                  <th className="px-4 py-3 text-left text-white/80">Role</th>
                  <th className="px-4 py-3 text-left text-white/80">Balance</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-t border-white/10">
                    <td className="px-4 py-3 text-white/60">{user.phoneNumber}</td>
                    <td className="px-4 py-3 text-white">{user.name || "N/A"}</td>
                    <td className="px-4 py-3 text-white">{user.role}</td>
                    <td className="px-4 py-3 text-green-400">${user.balance.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "deposits" && (
          <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-4 py-3 text-left text-white/80">Amount</th>
                  <th className="px-4 py-3 text-left text-white/80">Transfer #</th>
                  <th className="px-4 py-3 text-left text-white/80">Status</th>
                  <th className="px-4 py-3 text-left text-white/80">Actions</th>
                </tr>
              </thead>
              <tbody>
                {deposits.map((deposit) => (
                  <tr key={deposit.id} className="border-t border-white/10">
                    <td className="px-4 py-3 text-green-400">${deposit.amount}</td>
                    <td className="px-4 py-3 text-white/60">{deposit.transferNumber}</td>
                    <td className="px-4 py-3 text-white">{deposit.status}</td>
                    <td className="px-4 py-3">
                      {deposit.status === "PENDING" && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleAction("deposit", deposit.id, "approve")}
                            className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg text-sm"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleAction("deposit", deposit.id, "reject")}
                            className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg text-sm"
                          >
                            Reject
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "withdrawals" && (
          <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-4 py-3 text-left text-white/80">Amount</th>
                  <th className="px-4 py-3 text-left text-white/80">Transfer To</th>
                  <th className="px-4 py-3 text-left text-white/80">Status</th>
                  <th className="px-4 py-3 text-left text-white/80">Actions</th>
                </tr>
              </thead>
              <tbody>
                {withdrawals.map((withdrawal) => (
                  <tr key={withdrawal.id} className="border-t border-white/10">
                    <td className="px-4 py-3 text-red-400">${withdrawal.amount}</td>
                    <td className="px-4 py-3 text-white/60">{withdrawal.transferToNumber}</td>
                    <td className="px-4 py-3 text-white">{withdrawal.status}</td>
                    <td className="px-4 py-3">
                      {withdrawal.status === "PENDING" && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleAction("withdrawal", withdrawal.id, "approve")}
                            className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg text-sm"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleAction("withdrawal", withdrawal.id, "reject")}
                            className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg text-sm"
                          >
                            Reject
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}