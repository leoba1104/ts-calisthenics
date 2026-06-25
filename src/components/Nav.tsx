import { useState } from 'react'
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
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-bg/85 backdrop-blur-md border-b border-accent/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Brand */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <img src={logo} alt="TS" className="w-9 h-9 rounded-lg object-cover" />
            <div className="flex flex-col leading-none gap-[2px]">
              <span className="font-display text-[20px] tracking-wider uppercase text-white leading-none">
                TS Calisthenics
              </span>
              <span className="text-[9px] tracking-[0.22em] uppercase text-accent font-bold leading-none">
                Academy
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-7">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-[13px] font-medium text-muted hover:text-white transition-colors duration-200 group"
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#cta"
              className="hidden lg:inline-flex items-center gap-1.5 bg-accent hover:bg-accent-dim text-white font-bold px-5 py-2.5 rounded-full text-[13px] transition-all duration-200 hover:-translate-y-0.5"
            >
              Reservar
            </a>

            <button
              onClick={() => setOpen(v => !v)}
              className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            >
              <span className={`block w-6 h-[2px] bg-white origin-center transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-6 h-[2px] bg-white origin-center transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg/97 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {links.map((l, i) => (
            <li
              key={l.href}
              className="overflow-hidden"
              style={{ transitionDelay: open ? `${i * 50}ms` : '0ms' }}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block font-display text-[clamp(40px,9vw,64px)] uppercase tracking-tight text-white hover:text-accent transition-all duration-300 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#cta"
          onClick={() => setOpen(false)}
          className={`mt-10 inline-flex items-center gap-2 bg-accent text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:bg-accent-dim ${
            open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: open ? `${links.length * 60}ms` : '0ms' }}
        >
          Reservar primera clase →
        </a>
      </div>
    </>
  )
}
