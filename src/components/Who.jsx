import { GraduationCap, CalendarRange, School } from 'lucide-react'

export default function Who() {
  const items = [
    {
      icon: GraduationCap,
      title: 'Course creators and training centers',
      text: 'Share materials and signups with trackable links and QR.',
    },
    {
      icon: CalendarRange,
      title: 'Event organizers and agencies',
      text: 'Measure which posters, ads, or partners drive attendance.',
    },
    {
      icon: School,
      title: 'Schools and educational projects',
      text: 'Modernize menus, schedules and notices with smart QR.',
    },
  ]
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <Icon className="h-6 w-6 text-slate-900" />
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
