import logo from '../../assets/logo.jpg'

const links = [
  { label: 'Historia',  href: '#historia' },
  { label: 'Galería',   href: '#galeria' },
  { label: 'Retos',     href: '#retos' },
  { label: 'Coaches',   href: '#coaches' },
  { label: 'App',       href: '#app' },
  { label: 'Horarios',  href: '#horarios' },
]

export default function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
          <img src={logo} alt="TS Calisthenics" className="w-8 h-8 rounded-md object-cover" />
          <span className="font-display text-[18px] tracking-wide uppercase leading-none text-white">
            TS Calisthenics
          </span>
        </a>

        <ul className="hidden lg:flex gap-6">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] font-medium text-muted hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
