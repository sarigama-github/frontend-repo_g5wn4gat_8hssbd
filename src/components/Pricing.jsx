export default function Pricing() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Simple pricing</h2>
        <p className="mt-2 text-slate-600">Start free, upgrade when you need more.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Free</h3>
            <p className="mt-1 text-slate-600 text-sm">Free plan for testing</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
              <li>Basic short links</li>
              <li>Standard QR codes</li>
              <li>Limited analytics</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Pro</h3>
            <p className="mt-1 text-slate-600 text-sm">Pro plan from X eur per month - includes AI QR, more links, full analytics</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
              <li>AI styled QR codes</li>
              <li>UTM builder</li>
              <li>Advanced analytics</li>
            </ul>
          </div>
        </div>

        <a id="cta" href="#" className="inline-flex items-center justify-center mt-8 rounded-full bg-slate-900 text-white px-6 py-3 font-semibold shadow hover:bg-slate-800 transition">
          Join early access list
        </a>
      </div>
    </section>
  )
}
