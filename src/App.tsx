import Nav            from './components/Nav'
import Hero           from './components/Hero'
import Historia       from './components/Historia'
import Galeria        from './components/Galeria'
import Retos          from './components/Retos'
import Coaches        from './components/Coaches'
import AppSection     from './components/AppSection'
import Horarios       from './components/Horarios'
import Testimonios    from './components/Testimonios'
import CtaFinal       from './components/CtaFinal'
import WhatsAppBubble from './components/WhatsAppBubble'

export default function App() {
  return (
    <div className="bg-bg text-white font-body h-screen w-screen overflow-y-scroll snap-y snap-proximity scroll-smooth scroll-pt-16">
      <Nav />
      <Hero />
      <Historia />
      <Galeria />
      <Retos />
      <Coaches />
      <AppSection />
      <Horarios />
      <Testimonios />
      <CtaFinal />
      <WhatsAppBubble />
    </div>
  )
}
