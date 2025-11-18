import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function PhoneMock() {
  return (
    <div className="relative w-64 h-[520px] rounded-[3rem] border border-slate-200 bg-white shadow-2xl overflow-hidden">
      <div className="absolute inset-x-12 top-2 h-6 rounded-full bg-slate-200" />
      <div className="absolute inset-0 p-5 pt-10">
        <div className="h-48 rounded-xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border border-slate-100 flex items-center justify-center mb-4">
          {/* AI-styled QR (stylized SVG) */}
          <svg viewBox="0 0 120 120" className="w-28 h-28 drop-shadow-sm">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="120" height="120" rx="12" fill="url(#g1)" opacity="0.08" />
            <rect x="8" y="8" width="36" height="36" rx="6" fill="none" stroke="#111827" strokeOpacity="0.7" strokeWidth="6" />
            <rect x="76" y="8" width="36" height="36" rx="6" fill="none" stroke="#111827" strokeOpacity="0.7" strokeWidth="6" />
            <rect x="8" y="76" width="36" height="36" rx="6" fill="none" stroke="#111827" strokeOpacity="0.7" strokeWidth="6" />
            {/* Inner art to suggest AI stylization but keep quiet center for scannability */}
            <circle cx="60" cy="60" r="10" fill="#111827" fillOpacity="0.75" />
            <rect x="52" y="20" width="16" height="8" rx="2" fill="#111827" fillOpacity="0.6" />
            <rect x="20" y="56" width="8" height="16" rx="2" fill="#111827" fillOpacity="0.6" />
            <rect x="92" y="56" width="8" height="16" rx="2" fill="#111827" fillOpacity="0.6" />
            <rect x="56" y="92" width="8" height="8" rx="2" fill="#111827" fillOpacity="0.6" />
          </svg>
        </div>
        <div className="space-y-3">
          <div className="h-4 w-28 bg-slate-200 rounded" />
          <div className="h-3 w-40 bg-slate-100 rounded" />
          <div className="h-3 w-48 bg-slate-100 rounded" />
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-16 rounded-xl bg-white border border-slate-200 shadow-sm" />
          ))}
        </div>
      </div>
    </div>
  )
}

function DashboardMock() {
  return (
    <div className="relative w-full rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-sm shadow-xl">
      <div className="flex items-center gap-2 p-3 border-b border-slate-200">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
      </div>
      <div className="p-6 grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-7 space-y-4">
          <div className="h-10 w-64 bg-slate-100 rounded" />
          <div className="h-48 rounded-xl bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 border border-slate-100" />
          <div className="grid grid-cols-3 gap-4">
            <div className="h-24 rounded-xl bg-white border border-slate-200 shadow-sm" />
            <div className="h-24 rounded-xl bg-white border border-slate-200 shadow-sm" />
            <div className="h-24 rounded-xl bg-white border border-slate-200 shadow-sm" />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 flex items-center justify-center">
          <PhoneMock />
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white to-transparent" />
      <div className="absolute -top-[20%] -left-[10%] h-[40rem] w-[40rem] rounded-full bg-indigo-100 blur-[120px] opacity-50" />
      <div className="absolute -bottom-[10%] -right-[10%] h-[32rem] w-[32rem] rounded-full bg-pink-100 blur-[120px] opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              AI powered QR codes and smart links for your courses and events
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-4 text-lg text-slate-600"
            >
              Create short qr.lt links, track every scan, and generate beautiful AI QR codes that always work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-6 py-3 font-semibold shadow hover:bg-slate-800 transition">
                Get early access <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#how" className="text-slate-700 hover:text-slate-900 font-medium">See how it works</a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative"
          >
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
