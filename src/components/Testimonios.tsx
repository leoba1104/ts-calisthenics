import { Marquee } from '@/components/ui/3d-testimonails'

const testimonials = [
  {
    name: 'Valentina R.',
    username: '@valen_r',
    body: 'Empecé sin poder hacer una dominada y hoy hago muscle-ups. Los coaches son increíbles.',
    img: 'https://randomuser.me/api/portraits/women/32.jpg',
  },
  {
    name: 'Sebastián B.',
    username: '@seba_b',
    body: 'Nunca pensé que entrenar sin pesas podría ser tan completo. La progresión es real.',
    img: 'https://randomuser.me/api/portraits/men/51.jpg',
  },
  {
    name: 'Camila D.',
    username: '@cami_d',
    body: 'Tomé clases de todo tipo y TS es diferente. Te enseñan a moverte, no solo a sudar.',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Andrés P.',
    username: '@andres_p',
    body: 'Llegué buscando bajar de peso, me quedé por la comunidad y la disciplina.',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  {
    name: 'Romina L.',
    username: '@romi_l',
    body: 'Después de años en gym tradicional esto me voló la cabeza. Progreso constante.',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    name: 'Gonzalo R.',
    username: '@gonza_r',
    body: 'Los coaches entrenan con vos, no te gritan desde afuera. Eso marca la diferencia.',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    name: 'Julián F.',
    username: '@juli_f',
    body: 'Típico que no confiás en el Street Workout, probá y te cambia la cabeza.',
    img: 'https://randomuser.me/api/portraits/men/61.jpg',
  },
  {
    name: 'Daniela G.',
    username: '@dani_g',
    body: 'En 3 meses aprendí el handstand. La técnica que te dan acá no la encontrás en otro lado.',
    img: 'https://randomuser.me/api/portraits/women/53.jpg',
  },
  {
    name: 'Camila T.',
    username: '@cami_t',
    body: 'Comunidad increíble. Llegás solo y salís con un grupo que te empuja cada clase.',
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    name: 'Lucas M.',
    username: '@lucas_m',
    body: 'El Front Lever era un sueño. Con Yurguen en 4 meses lo hice. Método real.',
    img: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
]

function TestimonialCard({ img, name, username, body }: (typeof testimonials)[0]) {
  return (
    <figure className="w-72 flex-shrink-0 mx-2 bg-surface border border-border rounded-[18px] p-5 select-none">
      <div className="flex gap-[3px] mb-3">
        {[1, 2, 3, 4, 5].map(i => (
          <span key={i} className="text-accent text-[13px] leading-none">★</span>
        ))}
      </div>
      <blockquote className="text-[14px] leading-relaxed text-white/80 mb-4">
        "{body}"
      </blockquote>
      <div className="flex items-center gap-2.5">
        <img
          src={img}
          alt={name}
          className="w-8 h-8 rounded-full object-cover flex-shrink-0"
        />
        <div>
          <p className="text-[13px] font-semibold text-white leading-tight">{name}</p>
          <p className="text-[11px] text-muted">{username}</p>
        </div>
      </div>
    </figure>
  )
}

const firstRow  = testimonials.slice(0, 5)
const secondRow = testimonials.slice(5)

export default function Testimonios() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <h2 className="font-display text-[clamp(38px,5vw,64px)] leading-[1] uppercase tracking-tight">
            Lo que dicen los<br />que entrenan.
          </h2>
          <p className="text-muted text-[13px] sm:pb-1 flex-shrink-0">+200 reseñas</p>
        </div>
      </div>

      <div className="space-y-3">
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map(r => <TestimonialCard key={r.username} {...r} />)}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:45s]">
          {secondRow.map(r => <TestimonialCard key={r.username} {...r} />)}
        </Marquee>
      </div>
    </section>
  )
}
