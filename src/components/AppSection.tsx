const features = [
  'Reserva tu clase en un clic',
  'Elegí tu coach y horario',
  'Historial de entrenamientos',
  'Notificaciones en tiempo real',
  'Descargá en iOS y Android',
]

function QRCode() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="#000">
      {/* simplified QR pattern */}
      {/* top-left finder */}
      <rect x="5" y="5" width="30" height="30" rx="2" fill="#000"/>
      <rect x="10" y="10" width="20" height="20" rx="1" fill="#fff"/>
      <rect x="14" y="14" width="12" height="12" rx="1" fill="#000"/>
      {/* top-right finder */}
      <rect x="65" y="5" width="30" height="30" rx="2" fill="#000"/>
      <rect x="70" y="10" width="20" height="20" rx="1" fill="#fff"/>
      <rect x="74" y="14" width="12" height="12" rx="1" fill="#000"/>
      {/* bottom-left finder */}
      <rect x="5" y="65" width="30" height="30" rx="2" fill="#000"/>
      <rect x="10" y="70" width="20" height="20" rx="1" fill="#fff"/>
      <rect x="14" y="74" width="12" height="12" rx="1" fill="#000"/>
      {/* data modules */}
      <rect x="40" y="5"  width="5" height="5" fill="#000"/>
      <rect x="50" y="5"  width="5" height="5" fill="#000"/>
      <rect x="55" y="10" width="5" height="5" fill="#000"/>
      <rect x="40" y="15" width="5" height="5" fill="#000"/>
      <rect x="45" y="20" width="5" height="5" fill="#000"/>
      <rect x="55" y="20" width="5" height="5" fill="#000"/>
      <rect x="40" y="25" width="5" height="5" fill="#000"/>
      <rect x="5"  y="40" width="5" height="5" fill="#000"/>
      <rect x="15" y="40" width="5" height="5" fill="#000"/>
      <rect x="25" y="40" width="5" height="5" fill="#000"/>
      <rect x="40" y="40" width="5" height="5" fill="#000"/>
      <rect x="50" y="40" width="5" height="5" fill="#000"/>
      <rect x="60" y="40" width="5" height="5" fill="#000"/>
      <rect x="70" y="40" width="5" height="5" fill="#000"/>
      <rect x="80" y="40" width="5" height="5" fill="#000"/>
      <rect x="90" y="40" width="5" height="5" fill="#000"/>
      <rect x="5"  y="50" width="5" height="5" fill="#000"/>
      <rect x="20" y="50" width="5" height="5" fill="#000"/>
      <rect x="35" y="50" width="5" height="5" fill="#000"/>
      <rect x="45" y="50" width="5" height="5" fill="#000"/>
      <rect x="55" y="55" width="5" height="5" fill="#000"/>
      <rect x="65" y="50" width="5" height="5" fill="#000"/>
      <rect x="80" y="50" width="5" height="5" fill="#000"/>
      <rect x="40" y="65" width="5" height="5" fill="#000"/>
      <rect x="50" y="65" width="5" height="5" fill="#000"/>
      <rect x="60" y="65" width="5" height="5" fill="#000"/>
      <rect x="55" y="70" width="5" height="5" fill="#000"/>
      <rect x="70" y="70" width="5" height="5" fill="#000"/>
      <rect x="40" y="75" width="5" height="5" fill="#000"/>
      <rect x="50" y="80" width="5" height="5" fill="#000"/>
      <rect x="60" y="80" width="5" height="5" fill="#000"/>
      <rect x="40" y="85" width="5" height="5" fill="#000"/>
      <rect x="55" y="85" width="5" height="5" fill="#000"/>
      <rect x="70" y="85" width="5" height="5" fill="#000"/>
      <rect x="45" y="90" width="5" height="5" fill="#000"/>
      <rect x="60" y="90" width="5" height="5" fill="#000"/>
    </svg>
  )
}

export default function AppSection() {
  return (
    <section id="app" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-surface border border-border rounded-[28px] px-10 py-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center relative overflow-hidden">
          {/* glow */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[radial-gradient(circle,rgba(255,98,0,0.06)_0%,transparent_70%)] pointer-events-none" />

          <div>
            <p className="text-muted text-[15px] max-w-md leading-relaxed mb-7">
              Nuestra app te da el control completo de tu entrenamiento: horarios y pagos sin complicaciones.
            </p>

            <ul className="space-y-2.5 mb-8">
              {features.map(f => (
                <li key={f} className="flex items-center gap-2.5 text-muted text-[14px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dim text-white font-bold px-7 py-3 rounded-full text-sm transition-all hover:-translate-y-0.5"
            >
              Bajá la app →
            </a>
          </div>

          {/* QR */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-56 h-56 bg-white rounded-3xl p-3.5 flex items-center justify-center shadow-[0_0_40px_rgba(255,98,0,0.15)]">
              <QRCode />
            </div>
            <p className="text-muted text-[12px] text-center max-w-[160px] leading-snug">
              Escaneá con tu cámara para descargar
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
