import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="snap-start h-screen w-screen overflow-y-auto border-t border-border flex items-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo className="w-6 h-6 text-white" />
          <span className="text-muted text-[13px]">© 2026 TS Calisthenics Academy</span>
        </div>
        <nav className="flex gap-6">
          {['Instagram', 'TikTok', 'Contacto'].map(l => (
            <a key={l} href="#" className="text-muted text-[13px] hover:text-white transition-colors">
              {l}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
