"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("+20");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const phoneWithCode = code + phone.replace(/^0/, "");

    if (!phoneWithCode || !password) {
      setError("يرجى إدخال جميع البيانات");
      return;
    }

    setLoading(true);

    try {
      const result = await signIn("credentials", {
        phoneNumber: phoneWithCode,
        password: password,
        redirect: false,
      });

      if (result?.error) {
        setError("رقم الهاتف أو كلمة المرور غير صحيحة");
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
          <p className="text-white/60">أدخل بياناتك للدخول</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">رمز الدولة</label>
            <select
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500"
              required
            >
              <option value="+20">🇪🇬 +20 مصر</option>
              <option value="+966">🇸🇦 +966 السعودية</option>
              <option value="+971">🇦🇪 +971 الإمارات</option>
              <option value="+212">🇲🇦 +212 المغرب</option>
              <option value="+962">🇯🇴 +962 الأردن</option>
              <option value="+970">🇵🇸 +970 فلسطين</option>
              <option value="+964">🇮🇶 +964 العراق</option>
              <option value="+973">🇧🇭 +973 البحرين</option>
              <option value="+965">🇰🇼 +965 الكويت</option>
              <option value="+968">🇴🇲 +968 عُمان</option>
              <option value="+974">🇶🇦 +974 قطر</option>
              <option value="+216">🇹🇳 +216 تونس</option>
              <option value="+213">🇩🇿 +213 الجزائر</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">رقم الهاتف</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500"
              placeholder="أدخل رقم الهاتف بدون رمز الدولة"
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