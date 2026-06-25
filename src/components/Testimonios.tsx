import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
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
    body: 'La app para reservar clases es una genia. En 10 segundos tenés tu lugar.',
    img: 'https://randomuser.me/api/portraits/women/53.jpg',
  },
  {
    name: 'Camila T.',
    username: '@cami_t',
    body: 'Aprendí a hacer handstand en 3 meses. Técnica impecable de los profes.',
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
]

function TestimonialCard({
  img,
  name,
  username,
  body,
}: (typeof testimonials)[number]) {
  return (
    <Card className="w-52 border-border bg-surface">
      <CardContent className="p-4">
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-semibold text-white leading-tight">
              {name}
            </figcaption>
            <p className="text-xs text-muted">{username}</p>
          </div>
        </div>
        <div className="flex gap-0.5 mt-2.5 mb-1">
          {[1,2,3,4,5].map(i => (
            <span key={i} className="text-accent text-[11px]">★</span>
          ))}
        </div>
        <blockquote className="mt-1 text-[13px] leading-snug text-white/60">{body}</blockquote>
      </CardContent>
    </Card>
  )
}

export default function Testimonios() {
  return (
    <section className="py-24">
      {/* 3D marquee container */}
      <div className="relative flex h-96 w-full items-center justify-center overflow-hidden [perspective:300px]">
        <div
          className="flex flex-row items-center gap-4"
          style={{
            transform:
              'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
          }}
        >
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
            {testimonials.map(r => <TestimonialCard key={r.username} {...r} />)}
          </Marquee>

          <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
            {testimonials.map(r => <TestimonialCard key={r.username} {...r} />)}
          </Marquee>

          <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
            {testimonials.map(r => <TestimonialCard key={r.username} {...r} />)}
          </Marquee>

          <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
            {testimonials.map(r => <TestimonialCard key={r.username} {...r} />)}
          </Marquee>

          {/* gradient overlays */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-bg" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-bg" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-bg" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-bg" />
        </div>
      </div>
    </section>
  )
}
