import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-900">Ready to upgrade your QR codes and links?</h3>
        <p className="mt-2 text-slate-600">Join early users from education and events in Lithuania and get founder pricing.</p>
        <a href="#cta" className="inline-flex items-center gap-2 mt-6 rounded-full bg-slate-900 text-white px-6 py-3 font-semibold shadow hover:bg-slate-800 transition">
          Get early access <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
