import { useState } from 'react'

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
  'Principiante': 'bg-green-500/10  text-green-400  border-green-500/20',
  'Intermedio':   'bg-blue-500/10   text-blue-400   border-blue-500/20',
  'Avanzado':     'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Élite':        'bg-red-500/10    text-red-400    border-red-500/20',
  'Todos':        'bg-surface2      text-muted      border-border',
}

const levelTabActive: Record<string, string> = {
  'Principiante': 'bg-green-500/15  text-green-300',
  'Intermedio':   'bg-blue-500/15   text-blue-300',
  'Avanzado':     'bg-orange-500/15 text-orange-300',
  'Élite':        'bg-red-500/15    text-red-300',
}

type Reto = (typeof retos)[0]

function RetoCard({ r }: { r: Reto }) {
  const [active, setActive] = useState(r.levels[0])

  const visible = r.exercises.filter(
    ex => ex.nivel === active || ex.nivel === 'Todos'
  )

  return (
    <div className={`rounded-[20px] border flex flex-col overflow-hidden h-full ${
      r.featured ? 'border-accent/40 bg-bg' : 'border-border bg-bg'
    }`}>
      <div className="p-5 pb-4">
        {/* tag row */}
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
        <p className="text-muted text-[12px] leading-snug mb-4">{r.description}</p>

        {/* level tabs */}
        <div className="flex gap-0.5 bg-surface border border-border rounded-[10px] p-1">
          {r.levels.map(l => (
            <button
              key={l}
              onClick={() => setActive(l)}
              className={`flex-1 text-[10px] font-bold uppercase tracking-wider py-1.5 px-1 rounded-[7px] transition-all duration-150 ${
                active === l
                  ? (levelTabActive[l] ?? 'bg-white/10 text-white')
                  : 'text-sub hover:text-muted'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* exercises */}
      <div className="mx-4 mb-4 bg-surface rounded-[12px] border border-border overflow-hidden flex-1">
        {visible.length > 0 ? visible.map((ex, i) => (
          <div
            key={ex.name}
            className={`flex items-center justify-between px-3 py-2.5 ${
              i < visible.length - 1 ? 'border-b border-border' : ''
            }`}
          >
            <span className="text-[12px] font-medium">{ex.name}</span>
            <span className={`text-[10px] font-bold font-mono ${levelColors[active]?.split(' ')[1] ?? 'text-muted'}`}>
              {ex.reps}
            </span>
          </div>
        )) : (
          <p className="text-sub text-[12px] text-center px-4 py-6">
            Sin ejercicios para este nivel
          </p>
        )}
      </div>
    </div>
  )
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {retos.map(r => (
            <div key={r.title}>
              <RetoCard r={r} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
