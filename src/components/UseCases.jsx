export default function UseCases() {
  const cards = [
    {
      title: 'Courses and trainings',
      text: 'Posters, social media, emails - all with trackable links and QR.',
      bullets: ['Syllabus downloads with UTMs', 'Classroom posters with AI QR'],
    },
    {
      title: 'Events and conferences',
      text: 'Tickets, banners, flyers - know what really drives attendance.',
      bullets: ['Per-venue poster QR tracking', 'Speaker-specific promo links'],
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        {cards.map((c) => (
          <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">{c.title}</h3>
            <p className="mt-2 text-slate-600 text-sm">{c.text}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
              {c.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="mt-4 h-32 rounded-xl bg-gradient-to-br from-pink-50 via-violet-50 to-sky-50 border border-slate-100" />
          </div>
        ))}
      </div>
    </section>
  )
}
