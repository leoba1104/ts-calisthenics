import murph from '../../assets/murph.png'

export default function Hero() {
  return (
    <section className="snap-start h-screen w-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src={murph}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* dark overlay so text stays legible */}
        <div className="absolute inset-0 bg-bg/70" />
        {/* bottom fade into page bg */}
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>
      {/* orange glow accent */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,98,0,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(255,98,0,0.15)] border border-[rgba(255,98,0,0.3)] text-accent text-[11px] font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            +6 años transformando vidas
          </span>

          <h1 className="font-display text-[clamp(56px,8vw,100px)] leading-[0.93] tracking-tight uppercase mb-5">
            Tu propio<br />
            cuerpo<br />
            es la máquina.<br />
            <em className="text-accent not-italic">Transfórmalo.</em>
          </h1>

          <p className="text-white/60 text-[15px] leading-relaxed max-w-sm mb-8">
            Centro especializado en Calistenia &amp; Street Workout. Entrenamiento para todos los niveles.
          </p>

          <div className="flex flex-wrap gap-3 mb-0">
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
    </section>
  )
}

