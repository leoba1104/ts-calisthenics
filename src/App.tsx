import Nav            from './components/Nav'
import { TextParallaxContent } from './components/ui/text-parallax-content-scroll'
import Historia       from './components/Historia'
import Retos          from './components/Retos'
import Coaches        from './components/Coaches'
import Galeria        from './components/Galeria'
import AppSection     from './components/AppSection'
import Horarios       from './components/Horarios'
import Testimonios    from './components/Testimonios'
import CtaFinal       from './components/CtaFinal'
import WhatsAppBubble from './components/WhatsAppBubble'
import murph from '../assets/murph.png'

const IMGS = {
  historia:    'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2670&auto=format&fit=crop',
  retos:       'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2670&auto=format&fit=crop',
  coaches:     'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop',
  galeria:     'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2670&auto=format&fit=crop',
  app:         'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2670&auto=format&fit=crop',
  horarios:    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2670&auto=format&fit=crop',
  testimonios: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2670&auto=format&fit=crop',
  cta:         'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=2670&auto=format&fit=crop',
}

export default function App() {
  return (
    <div className="bg-bg text-white font-body">
      <Nav />

      {/* 1 — Hero */}
      <TextParallaxContent
        imgUrl={murph}
        subheading="+6 años transformando vidas"
        heading="Tu propio cuerpo es la máquina."
      >
        <div className="bg-bg py-16 px-3">
          <div className="max-w-6xl mx-auto px-3">
            <p className="text-white/60 text-[15px] leading-relaxed max-w-sm mb-8">
              Centro especializado en Calistenia &amp; Street Workout. Entrenamiento para todos los niveles.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dim text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all hover:-translate-y-0.5"
              >
                Empezar ahora
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#horarios"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all hover:-translate-y-0.5"
              >
                Ver horarios
              </a>
            </div>
          </div>
        </div>
      </TextParallaxContent>

      {/* 2 — Historia */}
      <TextParallaxContent
        imgUrl={IMGS.historia}
        subheading="Desde 2018"
        heading="Nació en un parque."
      >
        <Historia />
      </TextParallaxContent>

      {/* 3 — Retos */}
      <TextParallaxContent
        imgUrl={IMGS.retos}
        subheading="Desafíos"
        heading="Retos que te definen."
      >
        <Retos />
      </TextParallaxContent>

      {/* 4 — Coaches */}
      <TextParallaxContent
        imgUrl={IMGS.coaches}
        subheading="Entrenadores"
        heading="Coaches que entrenan contigo."
      >
        <Coaches />
      </TextParallaxContent>

      {/* 5 — Galería */}
      <TextParallaxContent
        imgUrl={IMGS.galeria}
        subheading="Galería"
        heading="Vive la academia."
      >
        <Galeria />
      </TextParallaxContent>

      {/* 6 — App */}
      <TextParallaxContent
        imgUrl={IMGS.app}
        subheading="TS App"
        heading="Reservá tu clase en segundos."
      >
        <AppSection />
      </TextParallaxContent>

      {/* 7 — Horarios */}
      <TextParallaxContent
        imgUrl={IMGS.horarios}
        subheading="Horarios"
        heading="Entrená en tu franja."
      >
        <Horarios />
      </TextParallaxContent>

      {/* 8 — Testimonios */}
      <TextParallaxContent
        imgUrl={IMGS.testimonios}
        subheading="Reviews"
        heading="Lo que dicen los que entrenan."
      >
        <Testimonios />
      </TextParallaxContent>

      {/* 9 — CTA Final */}
      <TextParallaxContent
        imgUrl={IMGS.cta}
        subheading="Empezá hoy"
        heading="Fuerza que transforma."
      >
        <CtaFinal />
      </TextParallaxContent>

      <WhatsAppBubble />
    </div>
  )
}
