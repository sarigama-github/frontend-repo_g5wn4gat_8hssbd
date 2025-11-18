import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, BrainCircuit } from 'lucide-react'

export default function WhyDifferent() {
  const items = [
    {
      icon: BrainCircuit,
      title: 'Neural styling, not filters',
      text: 'We generate compositions with a model trained for QR structure — not just overlay colors or logos.'
    },
    {
      icon: ShieldCheck,
      title: 'Scan-safe by design',
      text: 'Constraint-aware generation preserves finder patterns, quiet zones, and error correction budgets.'
    },
    {
      icon: Sparkles,
      title: 'Campaign intelligence built in',
      text: 'Short links with UTM builder, per-asset tracking, and insights on what really converts.'
    },
  ]

  return (
    <section className="relative py-20">
      {/* animated gradient frame */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          aria-hidden
          className="absolute -top-24 -left-16 h-72 w-72 rounded-full from-indigo-400/20 via-fuchsia-400/20 to-sky-400/20 bg-gradient-to-tr blur-3xl"
          animate={{ x: [0, 20, -10, 0], y: [0, -10, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full from-pink-400/20 via-violet-400/20 to-emerald-400/20 bg-gradient-to-tr blur-3xl"
          animate={{ x: [0, -15, 15, 0], y: [0, 10, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="inline-flex items-center text-xs font-semibold tracking-wide uppercase text-slate-600/80 bg-slate-100 rounded-full px-3 py-1">Not another shortener</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            A revolutionary AI QR generator — with scannability guarantees
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            We don’t just decorate QR codes. We co-design the pattern with AI while enforcing the rules scanners rely on — so your brand shines and every scan works.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/40 to-sky-500/40"
            >
              <div className="rounded-2xl h-full w-full bg-white p-6 border border-slate-200/70">
                <Icon className="h-6 w-6 text-slate-900" />
                <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* comparison strip */}
        <div className="mt-12">
          <div className="relative rounded-2xl border border-slate-200 overflow-hidden">
            <motion.div
              aria-hidden
              className="absolute inset-0 bg-[length:200%_200%] bg-gradient-to-r from-indigo-50 via-pink-50 to-sky-50"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
            <div className="relative grid md:grid-cols-2">
              <div className="p-6">
                <h4 className="font-semibold text-slate-900">Old way</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
                  <li>Generic black-and-white QR</li>
                  <li>Static destinations you can’t change</li>
                  <li>No idea which poster or link worked</li>
                </ul>
              </div>
              <div className="p-6 bg-white/70 backdrop-blur">
                <h4 className="font-semibold text-slate-900">qr.lt way</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
                  <li>AI-designed, on-brand QR codes</li>
                  <li>Smart links you can update any time</li>
                  <li>Per-asset tracking with real insights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
