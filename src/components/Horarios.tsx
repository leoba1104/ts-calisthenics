const schedule = [
  {
    days: 'Lunes a Viernes',
    turnos: [
      { label: 'Mañana', range: '07:00 – 11:00' },
      { label: 'Tarde',  range: '16:00 – 20:00' },
    ],
  },
  {
    days: 'Sábado',
    turnos: [
      { label: 'Mañana', range: '07:00 – 10:00' },
    ],
  },
]

export default function Horarios() {
  return (
    <section id="horarios" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
          <h2 className="font-display text-[clamp(38px,5vw,64px)] leading-[1] uppercase tracking-tight">
            Entrená en tu franja.
          </h2>
          <p className="text-muted text-[14px] sm:max-w-[220px] sm:text-right leading-relaxed">
            Sesiones de una hora. Máximo 8 personas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {schedule.map(s => (
            <div key={s.days} className="bg-surface border border-border rounded-[20px] p-7">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted mb-5">{s.days}</p>
              <div className="space-y-3">
                {s.turnos.map(t => (
                  <div
                    key={t.label}
                    className="flex items-center justify-between bg-surface2 border border-border rounded-xl px-5 py-4"
                  >
                    <span className="text-[13px] font-semibold text-muted uppercase tracking-wider">{t.label}</span>
                    <span className="font-display text-[26px] text-white leading-none">{t.range}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-muted text-[13px] mt-6 text-center">
          Domingo — cerrado · Para reservar tu lugar escribinos por{' '}
          <a href="#" className="text-accent hover:underline">Instagram</a>
          {' '}o bajá la app.
        </p>

      </div>
    </section>
  )
}
