"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProfilePage() {
  const router = useRouter();
  const [stores, setStores] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    try {
      const res = await fetch("/api/stores");
      if (res.ok) {
        const data = await res.json();
        setStores(data);
      }
    } catch (error) {
      console.error("Error fetching stores:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LjI1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <nav className="relative z-10 bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            TaskHub
          </h1>
          <div className="flex gap-4">
            <Link href="/login" className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition">
              Login
            </Link>
            <Link href="/register" className="px-4 py-2 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition">
              Register
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Earn Money <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Online</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Complete simple tasks and withdraw your earnings instantly. Join thousands of users earning daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-4xl mb-2">💰</div>
            <h3 className="text-xl font-bold text-white mb-2">Easy Earnings</h3>
            <p className="text-white/60">Complete tasks and earn money instantly to your wallet</p>
          </div>
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-4xl mb-2">🎁</div>
            <h3 className="text-xl font-bold text-white mb-2">Referral Bonus</h3>
            <p className="text-white/60">Invite friends and earn 10% of their earnings forever</p>
          </div>
          <div className="bg-gradient-to-br from-pink-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-4xl mb-2">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">Fast Withdrawals</h3>
            <p className="text-white/60">Withdraw your earnings anytime to your mobile wallet</p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Available <span className="text-purple-400">Stores</span></h3>
        </div>

        {loading ? (
          <div className="text-center text-white/60">Loading stores...</div>
        ) : stores.length === 0 ? (
          <div className="text-center text-white/60">No stores available at the moment</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store) => (
              <div key={store.id} className="bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition">
                <h4 className="text-xl font-bold text-white mb-2">{store.name}</h4>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    ${store.price}
                  </span>
                  <span className="text-green-400">+${store.profitPerTask}/task</span>
                </div>
                <p className="text-white/60 text-sm mb-4">{store.tasksAvailable} tasks available</p>
                <Link href="/register" className="block w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-center hover:opacity-90 transition">
                  Start Now
                </Link>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to <span className="text-pink-400">Start?</span></h3>
          <Link href="/register" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg hover:scale-105 transition-transform">
            Create Free Account
          </Link>
        </div>
      </main>

      <footer className="relative z-10 bg-white/5 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-white/40">
          <p>© 2024 TaskHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}