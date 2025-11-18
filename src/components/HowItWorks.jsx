export default function HowItWorks() {
  const steps = [
    {
      n: 1,
      title: 'Create your short link',
      text: 'Turn any long URL into a qr.lt link you can share anywhere.',
    },
    {
      n: 2,
      title: 'Add UTMs and generate QR',
      text: 'Pick campaign tags, then generate a classic or AI-styled QR.',
    },
    {
      n: 3,
      title: 'Download and track',
      text: 'Use your QR on posters or screens and see scans in real-time.',
    },
  ]

  return (
    <section id="how" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold">{s.n}</div>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.text}</p>
              <div className="mt-4 h-28 rounded-xl bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 border border-slate-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
