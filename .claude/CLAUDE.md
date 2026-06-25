# TS Calisthenics Academy — Landing Page

## Stack de decisiones

| Capa | Decisión | Razón |
|------|----------|-------|
| Framework | React 18 + TypeScript | Componentes reutilizables, tipado seguro |
| Build tool | Vite 6 | Dev server rápido, zero config |
| Estilos | Tailwind CSS v3 | Clases utilitarias, ideal para landing pages |
| Fonts | Google Fonts — Bebas Neue + Inter | Display impactante + body legible |
| SVGs | Inline en componentes TSX | Sin dependencias de íconos |
| Animaciones | CSS keyframes (marquee) + Tailwind transitions | Sin Framer ni GSAP |

## Tailwind Design Tokens (tailwind.config.js)

```js
colors: {
  bg:        '#0a0a0a'  // fondo global
  surface:   '#111111'  // cards nivel 1
  surface2:  '#1a1a1a'  // cards nivel 2 / fondos secundarios
  border:    '#2a2a2a'  // bordes de cards
  accent:    '#FF6200'  // naranja principal
  accent-dim:'#cc4e00'  // naranja hover
  muted:     '#888888'  // texto secundario
  sub:       '#555555'  // texto terciario
}
fontFamily: {
  display: 'Bebas Neue'  // headings display uppercase
  body:    'Inter'        // texto general
}
```

## Estructura de archivos

```
src/
  components/
    Logo.tsx          — SVG del logo TS inline
    Nav.tsx           — Navbar fija con scroll effect
    Hero.tsx          — Sección hero principal
    Academia.tsx      — "Una comunidad. Una disciplina."
    Coaches.tsx       — Grid de coaches
    AppSection.tsx    — Reserva de clases + QR
    Horarios.tsx      — Tabs por día + time slots
    Testimonios.tsx   — Marquee horizontal de reviews
    CtaFinal.tsx      — Cierre "Fuerza que transforma"
    Footer.tsx        — Footer mínimo
  App.tsx             — Composición de secciones
  main.tsx            — Entry point
  index.css           — @tailwind directives + keyframes marquee
```

## Dev server

```bash
npm run dev     # http://localhost:5173
npm run build   # dist/
```

## Reglas de desarrollo

- No agregar librerías externas sin discutirlo
- Los colores y fuentes salen de `tailwind.config.js`, nunca hardcodeados
- Mobile-first responsive con breakpoints `md:` y `lg:` de Tailwind
- Componentes simples — sin estado global, sin context
- Datos de coaches, horarios y testimonios están hardcodeados en cada componente por ahora
