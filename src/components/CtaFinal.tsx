import logo from '../../assets/logo.jpg'

export default function CtaFinal() {
  return (
    <section id="cta" className="py-16 flex flex-col justify-between min-h-screen">
      {/* CTA card */}
      <div className="max-w-6xl mx-auto px-6 w-full flex-1 flex items-center">
        <div className="w-full bg-surface border border-border rounded-[28px] px-8 py-16 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(255,98,0,0.08)_0%,transparent_70%)] pointer-events-none" />

          <h2 className="font-display text-[clamp(52px,8vw,96px)] leading-[0.93] uppercase tracking-tight mb-5 relative">
            Fuerza que<br />
            <em className="text-accent not-italic">transforma.</em>
          </h2>

          <p className="text-muted text-[16px] max-w-md mx-auto leading-relaxed mb-10 relative">
            Sin excusas, sin máquinas. Empezá tu camino en TS Calisthenics Academy y descubrí lo que tu cuerpo puede hacer.
          </p>

          <div className="flex flex-wrap gap-3 justify-center relative">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dim text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all hover:-translate-y-0.5"
            >
              Reservar primera clase
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#horarios"
              className="inline-flex items-center gap-2 border border-border hover:border-muted text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all hover:-translate-y-0.5"
            >
              Ver horarios
            </a>
          </div>
        </div>
      </div>

      {/* Footer embebido — no es sección snap */}
      <footer className="max-w-6xl mx-auto px-6 w-full py-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="TS Calisthenics" className="w-6 h-6 rounded-md object-cover" />
          <span className="text-muted text-[13px]">© 2025 TS Calisthenics Academy</span>
        </div>
        <nav className="flex gap-6">
          {['Instagram', 'TikTok', 'Contacto'].map(l => (
            <a key={l} href="#" className="text-muted text-[13px] hover:text-white transition-colors">
              {l}
            </a>
          ))}
        </nav>
      </footer>
    </section>
  )
}
