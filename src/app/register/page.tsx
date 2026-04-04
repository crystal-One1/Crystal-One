"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const COUNTRY_CODES = [
  { code: "+20", country: "مصر", flag: "🇪🇬" },
  { code: "+966", country: "السعودية", flag: "🇸🇦" },
  { code: "+971", country: "الإمارات", flag: "🇦🇪" },
  { code: "+212", country: "المغرب", flag: "🇲🇦" },
  { code: "+962", country: "الأردن", flag: "🇯🇴" },
  { code: "+970", country: "فلسطين", flag: "🇵🇸" },
  { code: "+964", country: "العراق", flag: "🇮🇶" },
  { code: "+973", country: "البحرين", flag: "🇧🇭" },
  { code: "+965", country: "الكويت", flag: "🇰🇼" },
  { code: "+968", country: "عُمان", flag: "🇴🇲" },
  { code: "+974", country: "قطر", flag: "🇶🇦" },
  { code: "+216", country: "تونس", flag: "🇹🇳" },
  { code: "+213", country: "الجزائر", flag: "🇩🇿" },
];

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    code: "+20",
    password: "",
    confirmPassword: "",
    referralCode: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const name = formData.name.trim();
    const phone = formData.code + formData.phone.trim();
    const pass = formData.password.trim();

    if (!name || !phone || !pass) {
      setError("يرجى填写 جميع الحقول المطلوبة");
      return;
    }

    if (pass.length < 6) {
      setError("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
      return;
    }

    if (pass !== formData.confirmPassword) {
      setError("كلمات المرور غير متطابقة");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber: phone,
          password: pass,
          name: name,
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
            <label className="block text-sm font-medium text-white/80 mb-2">الاسم</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500"
              placeholder="أدخل اسمك"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">رمز الدولة</label>
            <select
              name="code"
              value={formData.code}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500"
              required
            >
              {COUNTRY_CODES.map((item) => (
                <option key={item.code} value={item.code} className="bg-slate-800">
                  {item.flag} {item.code} {item.country}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">رقم الهاتف</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500"
              placeholder="أدخل رقم الهاتف"
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
              placeholder="أدخل كود الإحالة إن имеется"
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