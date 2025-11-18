import { Route, BarChart3, QrCode } from 'lucide-react'

export default function Benefits() {
  const items = [
    {
      icon: Route,
      title: 'Short qr.lt links with UTM builder',
      text: 'Build campaign links with UTMs in seconds and keep them readable.'
    },
    {
      icon: BarChart3,
      title: 'Track every scan and click',
      text: 'See which poster, link or campaign actually brings people in.'
    },
    {
      icon: QrCode,
      title: 'AI styled QR codes that still scan',
      text: 'Generate on brand QR codes using AI without breaking scannability.'
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Icon className="h-6 w-6 text-slate-900" />
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">Built in Lithuania, hosted in EU.</p>
      </div>
    </section>
  )
}
