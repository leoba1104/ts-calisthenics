export default function Academia() {
  return (
    <section id="academia" className="snap-start h-screen w-screen overflow-y-auto py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-muted mb-3">La Academia</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <h2 className="font-display text-[clamp(38px,5vw,64px)] leading-[1.02] uppercase tracking-tight">
            Una comunidad.<br />Una disciplina.
          </h2>
          <p className="text-muted text-[15px] leading-relaxed">
            Más que un gimnasio: un espacio para forjar carácter. Método y práctica a través del entrenamiento con tu propio peso corporal.
          </p>
        </div>
      </div>
    </section>
  )
}
