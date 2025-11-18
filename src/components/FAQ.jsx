export default function FAQ() {
  const faqs = [
    {
      q: 'Will my QR codes always scan?',
      a: 'Yes. We generate AI-styled artwork that preserves scannability and test across major scanners.'
    },
    {
      q: 'Can I change the destination after printing?',
      a: 'Yes. Update the link any time — your QR stays the same.'
    },
    {
      q: 'Is data stored in EU?',
      a: 'Yes. Built in Lithuania and hosted in the EU by default.'
    },
    {
      q: 'Can I use it with my existing campaigns?',
      a: 'Absolutely. Use our UTM builder or paste your own tags and shortlink them.'
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 text-center">FAQ</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">{f.q}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
