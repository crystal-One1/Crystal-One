"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    referralCode: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const username = formData.username.trim();
    const email = formData.email.trim();
    const pass = formData.password.trim();
    const confirmPass = formData.confirmPassword.trim();

    if (!username || !email || !pass) {
      setError("يرجى ملء جميع الحقول المطلوبة");
      return;
    }

    if (pass.length < 6) {
      setError("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
      return;
    }

    if (pass !== confirmPass) {
      setError("كلمات المرور غير متطابقة");
      return;
    }

    if (!email.includes('@')) {
      setError("يرجى إدخال بريد إلكتروني صحيح");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: pass,
          confirmPassword: confirmPass,
          referralCode: formData.referralCode.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "فشل إنشاء الحساب");
        return;
      }

      setSuccess(true);
      setTimeout(() => router.push("/login"), 2000);
    } catch {
      setError("حدث خطأ في الاتصال");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/profile" className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            TaskHub
          </Link>
          <h1 className="text-2xl font-bold text-white mt-4">إنشاء حساب جديد</h1>
          <p className="text-white/60">أدخل بياناتك للاشتراك</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center">
              تم إنشاء الحساب بنجاح! جاري التحويل...
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">اسم المستخدم</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500"
              placeholder="أدخل اسم المستخدم"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500"
              placeholder="أدخل البريد الإلكتروني"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">كلمة المرور</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500"
              placeholder="أدخل كلمة المرور"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">تأكيد كلمة المرور</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500"
              placeholder="أعد إدخال كلمة المرور"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">كود الإحالة (اختياري)</label>
            <input
              type="text"
              name="referralCode"
              value={formData.referralCode}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500"
              placeholder="أدخل كود الإحالة إن وجد"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "جاري الإنشاء..." : "إنشاء حساب"}
          </button>
        </form>

        <p className="text-center text-white/60 mt-6">
          لديك حساب؟ <Link href="/login" className="text-purple-400 hover:text-pink-400">تسجيل الدخول</Link>
        </p>
      </div>
    </div>
  );
}