"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface User {
  id: string;
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
  role: string;
  balance: number;
  referralCode: string | null;
}

export default function DashboardPage() {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [phoneInput, setPhoneInput] = useState("");
  const [updatingPhone, setUpdatingPhone] = useState(false);

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

  const updatePhone = async () => {
    if (!phoneInput.trim()) return;
    setUpdatingPhone(true);
    try {
      const res = await fetch("/api/user/phone", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: phoneInput.trim() }),
      });
      if (res.ok) {
        await fetchUserData();
        setPhoneInput("");
        await update();
      }
    } catch (error) {
      console.error("Error updating phone:", error);
    } finally {
      setUpdatingPhone(false);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">جاري التحميل...</div>
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
            <span className="text-white/80">{user?.name || "مستخدم"}</span>
            {user?.balance !== undefined && (
              <span className="px-4 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold">
                ${user.balance.toFixed(2)}
              </span>
            )}
            {isAdmin && (
              <Link href="/admin" className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium">
                لوحة المدير
              </Link>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6">
        {isAdmin ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">إجمالي المستخدمين</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">عرض في اللوحة</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">الودائع المعلقة</h3>
              <p className="text-3xl font-bold text-yellow-400">عرض في اللوحة</p>
            </div>
            <div className="bg-gradient-to-br from-pink-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">السحوبات المعلقة</h3>
              <p className="text-3xl font-bold text-orange-400">عرض في اللوحة</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">رصيدك</h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                ${user?.balance?.toFixed(2) || "0.00"}
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">إحالاتك</h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">0</p>
            </div>
          </div>
        )}

        <div className="mt-8 bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h2 className="text-xl font-semibold text-white mb-4">معلومات الحساب</h2>
          <div className="space-y-3">
            <p className="text-white/60">
              اسم المستخدم: <span className="text-white">{user?.name || "غير محدد"}</span>
            </p>
            <p className="text-white/60">
              البريد الإلكتروني: <span className="text-white">{user?.email || "غير محدد"}</span>
            </p>
            <p className="text-white/60">
              رقم الهاتف: <span className="text-white">{user?.phoneNumber || "لم يُضف بعد"}</span>
            </p>
            <p className="text-white/60">
              الرصيد: <span className="text-green-400">${user?.balance?.toFixed(2) || "0.00"}</span>
            </p>
            {user?.referralCode && (
              <p className="text-white/60">
                كود الإحالة: <span className="text-purple-400">{user.referralCode}</span>
              </p>
            )}
          </div>
        </div>

        {!user?.phoneNumber && !isAdmin && (
          <div className="mt-8 bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">إضافة رقم الهاتف</h2>
            <p className="text-white/60 mb-4">أضف رقم هاتفك ليتمكن المدير من رؤيته</p>
            <div className="flex gap-4">
              <input
                type="tel"
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500"
                placeholder="أدخل رقم الهاتف"
              />
              <button
                onClick={updatePhone}
                disabled={updatingPhone || !phoneInput.trim()}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold hover:opacity-90 transition disabled:opacity-50"
              >
                {updatingPhone ? "جاري..." : "إضافة"}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}