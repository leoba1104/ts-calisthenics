const retos = [
  {
    tag: 'Activo',
    tagColor: 'bg-accent text-white',
    title: 'Final de Mes',
    description: 'Completá todos los ejercicios en una sola sesión. Sin descansos programados, solo tu cuerpo y tu cabeza.',
    levels: ['Principiante', 'Intermedio', 'Avanzado', 'Élite'],
    exercises: [
      { name: 'Muscle Up',      reps: '5 reps',    nivel: 'Élite' },
      { name: 'Front Lever',    reps: '10 seg',     nivel: 'Avanzado' },
      { name: 'Dominadas',      reps: '15 reps',    nivel: 'Intermedio' },
      { name: 'Dips',           reps: '20 reps',    nivel: 'Intermedio' },
      { name: 'Handstand',      reps: '30 seg',     nivel: 'Avanzado' },
      { name: 'L-Sit',          reps: '20 seg',     nivel: 'Intermedio' },
      { name: 'Infinity Plank', reps: 'Máx tiempo', nivel: 'Todos' },
    ],
    featured: true,
  },
  {
    tag: 'Próximo',
    tagColor: 'bg-surface2 border border-border text-muted',
    title: 'Reto de Fuerza',
    description: 'Push y pull combinados en el menor tiempo posible.',
    levels: ['Intermedio', 'Avanzado'],
    exercises: [
      { name: 'Archer Push-Up',     reps: '10 reps', nivel: 'Avanzado' },
      { name: 'Typewriter',         reps: '10 reps', nivel: 'Avanzado' },
      { name: 'Pike Push-Up',       reps: '15 reps', nivel: 'Intermedio' },
      { name: 'Negative Muscle Up', reps: '5 reps',  nivel: 'Élite' },
    ],
    featured: false,
  },
  {
    tag: 'Completado',
    tagColor: 'bg-surface2 border border-border text-sub',
    title: 'Reto 30 Días',
    description: 'Un mes de consistencia. Cada semana la exigencia sube.',
    levels: ['Principiante', 'Intermedio'],
    exercises: [
      { name: 'Plancha',     reps: '1 min',   nivel: 'Principiante' },
      { name: 'Sentadillas', reps: '50 reps', nivel: 'Principiante' },
      { name: 'Dominadas',   reps: '10 reps', nivel: 'Intermedio' },
      { name: 'Push-Up',     reps: '30 reps', nivel: 'Principiante' },
    ],
    featured: false,
  },
]

const levelColors: Record<string, string> = {
  'Principiante': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Intermedio':   'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Avanzado':     'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Élite':        'bg-red-500/10 text-red-400 border-red-500/20',
  'Todos':        'bg-surface2 text-muted border-border',
}

export default function Retos() {
  return (
    <section id="retos" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-12">
          <h2 className="font-display text-[clamp(38px,5vw,64px)] leading-[1] uppercase tracking-tight">
            Retos que te definen.
          </h2>
          <p className="text-muted text-[14px] leading-relaxed sm:text-right sm:max-w-[220px]">
            Elegí tu nivel, comprometete y demostrá lo que podés hacer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {retos.map(r => (
            <div
              key={r.title}
              className={`rounded-[20px] border flex flex-col overflow-hidden ${
                r.featured ? 'border-accent/40 bg-bg lg:col-span-2' : 'border-border bg-bg'
              }`}
            >
              <div className="p-5 pb-3">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${r.tagColor}`}>
                    {r.tag}
                  </span>
                  {r.featured && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/20">
                      Reto del mes
                    </span>
                  )}
                </div>
                <h3 className={`font-display uppercase tracking-tight leading-none mb-1 ${r.featured ? 'text-[28px]' : 'text-[22px]'}`}>
                  {r.title}
                </h3>
                <p className="text-muted text-[12px] leading-snug mb-3">{r.description}</p>
                <div className="flex flex-wrap gap-1">
                  {r.levels.map(l => (
                    <span key={l} className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${levelColors[l] ?? ''}`}>
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mx-4 mb-4 bg-surface2 rounded-[12px] border border-border overflow-hidden flex-1">
                {r.exercises.map((ex, i) => (
                  <div
                    key={ex.name}
                    className={`flex items-center justify-between px-3 py-2 ${i < r.exercises.length - 1 ? 'border-b border-border' : ''}`}
                  >
                    <span className="text-[12px] font-medium">{ex.name}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] text-muted">{ex.reps}</span>
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border ${levelColors[ex.nivel] ?? ''}`}>
                        {ex.nivel}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {r.featured && (
                <div className="px-4 pb-4">
                  <a
                    href="#cta"
                    className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dim text-white font-bold py-3 rounded-full text-[13px] transition-colors"
                  >
                    Inscribirse al reto →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
