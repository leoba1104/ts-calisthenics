import toto    from '../../assets/toto.png'
import vale    from '../../assets/vale.png'
import yurguen from '../../assets/yurguen.png'

const coaches = [
  {
    photo:  toto,
    level:  'Head Coach',
    name:   'Tobias Santon',
    handle: 'toto',
    cert:   'Certified Calisthenics Coach · Level 3',
    tags:   ['Street Workout', 'Fuerza', 'Planche'],
    bio:    'Fundador de TS Calisthenics. Entrenó más de 500 atletas desde cero. Especialista en fuerza máxima y habilidades estáticas.',
    ig:     '@tobias.santon',
    id:     'TS-001',
  },
  {
    photo:  vale,
    level:  'Coach',
    name:   'Valentín Santon',
    handle: 'vale',
    cert:   'Certified Calisthenics Coach · Level 2',
    tags:   ['Principiantes', 'Movilidad', 'Core'],
    bio:    'Especialista en llevar atletas desde cero hasta su primer muscle-up. Metódico, paciente y con foco en la técnica correcta.',
    ig:     '@valentin.santon',
    id:     'TS-002',
  },
  {
    photo:  yurguen,
    level:  'Coach',
    name:   'Yurguen Vargas',
    handle: 'yurguen',
    cert:   'Certified Calisthenics Coach · Level 2',
    tags:   ['Avanzado', 'Front Lever', 'Dinámicas'],
    bio:    'Campeón regional de Street Workout. Enfocado en el trabajo de habilidades avanzadas y explosividad en dinámicas.',
    ig:     '@yurguen.vargas',
    id:     'TS-003',
  },
]

export default function Coaches() {
  return (
    <div id="coaches" className="bg-bg py-16 px-3">
      <div className="max-w-6xl mx-auto px-3">

        <p className="text-muted text-[15px] max-w-xl leading-relaxed mb-10">
          Cada coach es un atleta activo y certificado. Pasá el cursor para conocerlos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coaches.map(c => (
            <div
              key={c.id}
              className="flip-card rounded-[24px] cursor-pointer"
              style={{ height: 560 }}
            >
              <div className="flip-inner rounded-[24px]">

                {/* FRONT */}
                <div className="flip-front bg-surface border border-border rounded-[24px] flex flex-col">
                  <div className="flex-1 relative overflow-hidden">
                    <img
                      src={c.photo}
                      alt={c.name}
                      className="w-full h-full object-cover object-[center_20%]"
                    />
                    <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-surface to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-surface/80 border border-border backdrop-blur-sm px-2.5 py-1 rounded-full text-white">
                        TS Calisthenics
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-accent/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-white">
                        Ver perfil →
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-accent mb-0.5">{c.level}</p>
                    <h3 className="text-[18px] font-extrabold mb-1">{c.name}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {c.tags.map(t => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-surface2 border border-border text-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div className="flip-back bg-surface2 border border-accent/30 rounded-[24px] flex flex-col justify-between p-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={c.photo}
                      alt={c.name}
                      className="w-14 h-14 rounded-full object-cover object-top border-2 border-accent"
                    />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-accent">{c.level}</p>
                      <p className="text-[17px] font-extrabold leading-tight">{c.name}</p>
                      <p className="text-muted text-[12px]">{c.ig}</p>
                    </div>
                  </div>
                  <div className="h-px bg-border my-4" />
                  <p className="text-white/70 text-[14px] leading-relaxed flex-1">{c.bio}</p>
                  <div className="mt-4 space-y-3">
                    <p className="text-muted text-[12px]">{c.cert}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {c.tags.map(t => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="#horarios"
                    className="mt-5 flex items-center justify-center gap-2 bg-accent hover:bg-accent-dim text-white text-[13px] font-bold py-3 rounded-full transition-colors"
                  >
                    Ver horarios
                  </a>
                  <p className="text-center text-sub text-[11px] mt-3">{c.id}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
