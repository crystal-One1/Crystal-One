"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!identifier || !password) {
      setError("يرجى إدخال جميع البيانات");
      return;
    }

    setLoading(true);

    try {
      const result = await signIn("credentials", {
        identifier: identifier.trim(),
        password: password,
        redirect: false,
      });

      if (result?.error) {
        setError("اسم المستخدم أو البريد الإلكتروني أو كلمة المرور غير صحيحة");
      } else {
        router.push("/dashboard");
      }
    } catch (err: any) {
      setError(err.message || "حدث خطأ في تسجيل الدخول");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/profile" className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            TaskHub
          </Link>
          <h1 className="text-2xl font-bold text-white mt-4">تسجيل الدخول</h1>
          <p className="text-white/60">أدخل اسم المستخدم أو البريد الإلكتروني</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">اسم المستخدم أو البريد الإلكتروني</label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500"
              placeholder="أدخل اسم المستخدم أو البريد الإلكتروني"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">كلمة المرور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500"
              placeholder="أدخل كلمة المرور"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "جاري الدخول..." : "دخول"}
          </button>
        </form>

        <p className="text-center text-white/60 mt-6">
          ليس لديك حساب؟ <Link href="/register" className="text-purple-400 hover:text-pink-400">إنشاء حساب</Link>
        </p>
      </div>
    </div>
  );
}