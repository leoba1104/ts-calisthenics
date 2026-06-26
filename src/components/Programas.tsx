const planes = [
  {
    id: 'recluta',
    tag: 'Gratis',
    tagStyle: 'bg-white/10 text-white',
    name: 'Recluta',
    subtitle: 'Tu punto de partida',
    price: null,
    priceNote: 'Sin costo, siempre.',
    description: 'La base que todo atleta necesita para empezar bien. Técnica, progresión y los fundamentos del método TS.',
    features: [
      'Guía de fundamentos PDF (24 páginas)',
      'Plan de 4 semanas para principiantes',
      'Tabla de calentamiento y movilidad',
      'Acceso al reto del mes',
      'Comunidad en WhatsApp',
    ],
    cta: 'Descargar gratis',
    ctaHref: '#',
    accent: false,
  },
  {
    id: 'guerrero',
    tag: 'Más popular',
    tagStyle: 'bg-accent text-white',
    name: 'Guerrero',
    subtitle: 'Para quien va en serio',
    price: '₡15,000',
    priceNote: 'Pago único. Tuyo para siempre.',
    description: 'Programa de 8 semanas diseñado para llevar tu fuerza y habilidades al siguiente nivel con progresión real.',
    features: [
      'Programa de 8 semanas estructurado',
      'Videos de técnica por ejercicio',
      'Progresiones hacia muscle-up y handstand',
      'Plan de nutrición base',
      'Seguimiento semanal con tu coach',
      'Acceso de por vida a actualizaciones',
    ],
    cta: 'Comprar ahora',
    ctaHref: '#',
    accent: true,
  },
  {
    id: 'elite',
    tag: 'Premium',
    tagStyle: 'bg-surface2 border border-border text-muted',
    name: 'Élite',
    subtitle: 'El programa completo',
    price: '₡35,000',
    priceNote: 'Pago único. Tuyo para siempre.',
    description: 'Para atletas que quieren dominar habilidades avanzadas: front lever, planche y dinámicas de competencia.',
    features: [
      'Todo lo de Guerrero incluido',
      'Programa de 12 semanas avanzado',
      'Progresiones a front lever y planche',
      'Análisis de video de tu técnica (x2)',
      'Acceso al grupo privado de Élite',
      'Sesión online de 30 min con Tobias',
    ],
    cta: 'Comprar ahora',
    ctaHref: '#',
    accent: false,
  },
]

export default function Programas() {
  return (
    <section id="programas" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-14">
          <div>
            <h2 className="font-display text-[clamp(38px,5vw,64px)] leading-[1] uppercase tracking-tight mb-2">
              Elegí tu programa.
            </h2>
            <p className="text-muted text-[15px] max-w-md leading-relaxed">
              Desde el primer movimiento hasta las habilidades más exigentes. Un programa para cada etapa.
            </p>
          </div>
          <p className="text-muted text-[13px] sm:pb-1 flex-shrink-0">3 planes</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {planes.map(p => (
            <div
              key={p.id}
              className={`relative flex flex-col rounded-[24px] border overflow-hidden ${
                p.accent
                  ? 'border-accent/50 bg-surface'
                  : 'border-border bg-surface'
              }`}
            >
              {/* accent glow on featured */}
              {p.accent && (
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,98,0,0.07)_0%,transparent_65%)] pointer-events-none" />
              )}

              <div className="p-7 flex flex-col flex-1 relative">
                {/* tag */}
                <span className={`self-start text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-5 ${p.tagStyle}`}>
                  {p.tag}
                </span>

                {/* name + subtitle */}
                <h3 className="font-display text-[36px] uppercase tracking-tight leading-none mb-0.5">
                  {p.name}
                </h3>
                <p className="text-muted text-[13px] mb-6">{p.subtitle}</p>

                {/* price */}
                <div className="mb-6">
                  {p.price ? (
                    <>
                      <span className={`font-display text-[48px] leading-none tracking-tight ${p.accent ? 'text-accent' : 'text-white'}`}>
                        {p.price}
                      </span>
                      <p className="text-muted text-[12px] mt-1">{p.priceNote}</p>
                    </>
                  ) : (
                    <>
                      <span className="font-display text-[48px] leading-none tracking-tight text-white">Gratis</span>
                      <p className="text-muted text-[12px] mt-1">{p.priceNote}</p>
                    </>
                  )}
                </div>

                {/* divider */}
                <div className={`h-px mb-6 ${p.accent ? 'bg-accent/20' : 'bg-border'}`} />

                {/* description */}
                <p className="text-white/60 text-[14px] leading-relaxed mb-6">{p.description}</p>

                {/* features */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] text-white/75">
                      <svg
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${p.accent ? 'text-accent' : 'text-white/40'}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={p.ctaHref}
                  className={`flex items-center justify-center gap-2 font-bold py-3.5 rounded-full text-[14px] transition-all hover:-translate-y-0.5 ${
                    p.accent
                      ? 'bg-accent hover:bg-accent-dim text-white'
                      : p.price
                        ? 'border border-white/20 hover:border-white/50 text-white'
                        : 'bg-white/10 hover:bg-white/15 text-white'
                  }`}
                >
                  {p.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
