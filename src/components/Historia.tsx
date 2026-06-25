import murph from '../../assets/murph.png'

const stats = [
  { num: '+6',   label: 'Años de historia' },
  { num: '+500', label: 'Atletas formados' },
  { num: '3',    label: 'Coaches certificados' },
  { num: '15',   label: 'Clases por semana' },
]

const hitos = [
  { year: '2018', title: 'El origen', text: 'Todo empezó en un parque. Tobias y un grupo de amigos entrenando con lo que tenían: barras, suelo y constancia.' },
  { year: '2020', title: 'La academia', text: 'Después de dos años al aire libre, abrimos el primer espacio físico. Un lugar donde la técnica y la comunidad se construyen juntas.' },
  { year: '2022', title: 'La comunidad crece', text: 'Sumamos coaches certificados, nuevos turnos y más de 300 atletas activos. TS se convirtió en referencia local.' },
  { year: '2024', title: 'Hoy', text: 'Más de 500 atletas, 15 clases semanales y una app propia. Seguimos siendo la misma esencia: cuerpo, mente y disciplina.' },
]

export default function Historia() {
  return (
    <section id="historia" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-14">
          <h2 className="font-display text-[clamp(38px,5vw,64px)] leading-[1] uppercase tracking-tight">
            Nació en un parque.
          </h2>
          <p className="text-muted text-[13px] tracking-wide sm:pb-1">Desde 2018</p>
        </div>

        {/* image + copy + stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-[24px] overflow-hidden aspect-[4/3]">
            <img src={murph} alt="TS Calisthenics" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
          </div>

          <div className="flex flex-col justify-between gap-6">
            <p className="text-white/70 text-[16px] leading-relaxed">
              La TS nació de la calle y la convicción de que el cuerpo es el mejor instrumento que existe. No necesitás máquinas, necesitás método. Técnica, progresión, comunidad real y resultados comprobables.
            </p>
            <p className="text-white/70 text-[16px] leading-relaxed">
              Hoy somos una academia con identidad propia, coaches que compiten y entrenan con vos, y una comunidad que empuja a cada atleta a superar su versión anterior.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-auto">
              {stats.map(s => (
                <div key={s.label} className="bg-surface border border-border rounded-[16px] p-5">
                  <p className="font-display text-[42px] text-accent leading-none">{s.num}</p>
                  <p className="text-muted text-[12px] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* timeline */}
        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden md:block" />
          <div className="space-y-6">
            {hitos.map(h => (
              <div key={h.year} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface border-2 border-accent items-center justify-center hidden md:flex">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div className="bg-surface border border-border rounded-[16px] p-6 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-display text-[22px] text-accent leading-none">{h.year}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted border border-border px-2.5 py-1 rounded-full">{h.title}</span>
                  </div>
                  <p className="text-white/65 text-[14px] leading-relaxed">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
