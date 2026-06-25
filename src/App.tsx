import Nav            from './components/Nav'
import Hero           from './components/Hero'
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

export default function App() {
  return (
    <div className="bg-bg text-white font-body">
      <Nav />
      <Hero />

      <TextParallaxContent
        imgUrl={murph}
        subheading="Desde 2018"
        heading="Nació en un parque."
      >
        <Historia />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2670&auto=format&fit=crop"
        subheading="Desafíos"
        heading="Retos que te definen."
      >
        <Retos />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop"
        subheading="Entrenadores"
        heading="Coaches que entrenan contigo."
      >
        <Coaches />
      </TextParallaxContent>

      <Galeria />
      <AppSection />
      <Horarios />
      <Testimonios />
      <CtaFinal />
      <WhatsAppBubble />
    </div>
  )
}
