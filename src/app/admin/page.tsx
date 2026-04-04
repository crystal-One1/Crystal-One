"use client";

import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
  const params = useParams();
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
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900">
      <nav className="bg-neutral-800 border-b border-neutral-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Admin Control Panel</h1>
          <div className="flex gap-4">
            <a href="/dashboard" className="text-neutral-300 hover:text-white">User Dashboard</a>
            <button
              onClick={() => router.push("/api/auth/signout")}
              className="text-red-400 hover:text-red-300"
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("users")}
            className={`px-4 py-2 rounded-lg ${activeTab === "users" ? "bg-indigo-600 text-white" : "bg-neutral-800 text-neutral-300"}`}
          >
            Users ({users.length})
          </button>
          <button
            onClick={() => setActiveTab("deposits")}
            className={`px-4 py-2 rounded-lg ${activeTab === "deposits" ? "bg-indigo-600 text-white" : "bg-neutral-800 text-neutral-300"}`}
          >
            Deposits ({deposits.filter(d => d.status === "PENDING").length} pending)
          </button>
          <button
            onClick={() => setActiveTab("withdrawals")}
            className={`px-4 py-2 rounded-lg ${activeTab === "withdrawals" ? "bg-indigo-600 text-white" : "bg-neutral-800 text-neutral-300"}`}
          >
            Withdrawals ({withdrawals.filter(w => w.status === "PENDING").length} pending)
          </button>
        </div>

        {activeTab === "users" && (
          <div className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden">
            <table className="w-full">
              <thead className="bg-neutral-700">
                <tr>
                  <th className="px-4 py-3 text-left text-white">Phone</th>
                  <th className="px-4 py-3 text-left text-white">Name</th>
                  <th className="px-4 py-3 text-left text-white">Role</th>
                  <th className="px-4 py-3 text-left text-white">Balance</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-t border-neutral-700">
                    <td className="px-4 py-3 text-neutral-300">{user.phoneNumber}</td>
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
          <div className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden">
            <table className="w-full">
              <thead className="bg-neutral-700">
                <tr>
                  <th className="px-4 py-3 text-left text-white">Amount</th>
                  <th className="px-4 py-3 text-left text-white">Transfer #</th>
                  <th className="px-4 py-3 text-left text-white">Status</th>
                  <th className="px-4 py-3 text-left text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                {deposits.map((deposit) => (
                  <tr key={deposit.id} className="border-t border-neutral-700">
                    <td className="px-4 py-3 text-green-400">${deposit.amount}</td>
                    <td className="px-4 py-3 text-neutral-300">{deposit.transferNumber}</td>
                    <td className="px-4 py-3 text-white">{deposit.status}</td>
                    <td className="px-4 py-3">
                      {deposit.status === "PENDING" && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleAction("deposit", deposit.id, "approve")}
                            className="px-2 py-1 bg-green-600 text-white rounded text-sm"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleAction("deposit", deposit.id, "reject")}
                            className="px-2 py-1 bg-red-600 text-white rounded text-sm"
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
          <div className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden">
            <table className="w-full">
              <thead className="bg-neutral-700">
                <tr>
                  <th className="px-4 py-3 text-left text-white">Amount</th>
                  <th className="px-4 py-3 text-left text-white">Transfer To</th>
                  <th className="px-4 py-3 text-left text-white">Status</th>
                  <th className="px-4 py-3 text-left text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                {withdrawals.map((withdrawal) => (
                  <tr key={withdrawal.id} className="border-t border-neutral-700">
                    <td className="px-4 py-3 text-red-400">${withdrawal.amount}</td>
                    <td className="px-4 py-3 text-neutral-300">{withdrawal.transferToNumber}</td>
                    <td className="px-4 py-3 text-white">{withdrawal.status}</td>
                    <td className="px-4 py-3">
                      {withdrawal.status === "PENDING" && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleAction("withdrawal", withdrawal.id, "approve")}
                            className="px-2 py-1 bg-green-600 text-white rounded text-sm"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleAction("withdrawal", withdrawal.id, "reject")}
                            className="px-2 py-1 bg-red-600 text-white rounded text-sm"
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