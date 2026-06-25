---
name: TS Calisthenics Academy
description: Landing page para academia de calistenia y street workout — cruda, intensa, comunidad
colors:
  abyss: "#0a0a0a"
  surface-1: "#111111"
  surface-2: "#1a1a1a"
  boundary: "#2a2a2a"
  industrial-flame: "#FF6200"
  industrial-flame-deep: "#cc4e00"
  ash: "#888888"
  coal: "#555555"
typography:
  display:
    fontFamily: '"Bebas Neue", sans-serif'
    fontSize: "clamp(56px, 8vw, 96px)"
    fontWeight: 400
    lineHeight: 0.93
    letterSpacing: "-0.02em"
  headline:
    fontFamily: '"Bebas Neue", sans-serif'
    fontSize: "clamp(38px, 5vw, 64px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  title:
    fontFamily: '"Bebas Neue", sans-serif'
    fontSize: "clamp(32px, 4vw, 52px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
  body:
    fontFamily: '"Inter", sans-serif'
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: '"Inter", sans-serif'
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: "0.12em"
rounded:
  chip: "6px"
  card: "20px"
  card-lg: "28px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.industrial-flame}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.industrial-flame-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  chip-neutral:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ash}"
    rounded: "{rounded.chip}"
    padding: "4px 10px"
  chip-accent:
    backgroundColor: "rgba(255,98,0,0.10)"
    textColor: "{colors.industrial-flame}"
    rounded: "{rounded.chip}"
    padding: "4px 10px"
  card:
    backgroundColor: "{colors.surface-1}"
    rounded: "{rounded.card}"
    padding: "20px"
  card-featured:
    backgroundColor: "{colors.surface-1}"
    rounded: "{rounded.card-lg}"
    padding: "32px"
---

# Design System: TS Calisthenics Academy

## 1. Overview

**Creative North Star: "La Calle Como Gimnasio"**

El asfalto es el escenario. La barra de metal frío a las 7 de la mañana. El cuerpo como única máquina disponible. Este sistema visual no es una marca de gym — es una convocatoria. El negro profundo absorbe la luz como el hormigón antes del amanecer. El naranja industrial estalla con la selectividad de una señal de obra, no de una decoración.

La tipografía Bebas Neue se comporta como stencil sobre concreto: mayúscula, condensada, sin pedir permiso. Inter la acompaña en los textos funcionales con la precisión de alguien que sabe lo que hace. No hay ornamentos. No hay glassmorphism decorativo. No hay gradientes. La jerarquía emerge del contraste de masa tipográfica y de la escasez calculada del naranja.

Las interacciones tienen **peso propio**. Un hover no es una animación — es una resistencia física. Los flip cards de los coaches giran con inercia real (perspective: 1000px, cubic-bezier(0.4, 0.2, 0.2, 1)). Los botones se elevan exactamente 2px al hover, como si despegaran del asfalto.

**Key Characteristics:**
- Superficie negra que absorbe, no refleja — profundidad por capas tonales, no por sombras
- Un solo acento cromático: usado como señal de acción, nunca como decoración de fondo
- Tipografía display que habla en mayúsculas porque el entrenamiento no susurra
- Interacciones con masa — no bounce, no elastic, no spring
- Fotografía real de atletas reales; el stock photography está prohibido

## 2. Colors: La Paleta Del Asfalto

La paleta tiene una sola voz cálida. Todo lo demás es negro estructural en cuatro tonos.

### Primary
- **Llama Industrial** (`#FF6200` / `oklch(64% 0.22 38)`): El único calor en la paleta. Aparece en botones de acción principal, badges de estado activo, bordes de acento en el reverso de los flip cards, y puntos de énfasis en titulares. **Nunca como fondo de sección.** Su escasez es su poder.
- **Llama Profunda** (`#cc4e00` / `oklch(54% 0.19 38)`): Hover y pressed state del primario. No se usa como color independiente — solo para confirmar resistencia en la interacción.

### Neutral
- **Abismo** (`#0a0a0a`): El fondo global. No es negro puro. Tiene una densidad específica que hace que el texto blanco y el naranja se sientan encendidos sobre él.
- **Superficie 1** (`#111111`): Cards de primer nivel, backgrounds de componentes. El primer escalón sobre el abismo.
- **Superficie 2** (`#1a1a1a`): Cards anidadas, fondos secundarios, listas dentro de cards. Nunca usar para un tercer nivel de anidación.
- **Frontera** (`#2a2a2a`): Bordes de separación. Divisores entre secciones de cards. No como líneas decorativas — solo donde hay separación funcional.
- **Ceniza** (`#888888`): Texto secundario. Subtítulos, descripciones de apoyo, metadatos. Contraste ~5.9:1 sobre Abismo — pasa WCAG AA.
- **Carbón** (`#555555`): Texto terciario. IDs, labels muy secundarios. Contraste ~3.5:1 sobre Abismo — solo para texto grande (≥18px) o negrita (≥14px bold). No usar como body text.

### Named Rules
**La Regla de La Señal.** El naranja Industrial ocupa menos del 10% de cualquier pantalla. Su rareza es el punto. Si empieza a verse en fondos de sección, banners, o bordes decorativos, el sistema se rompe.

**La Regla de Carbón.** El color `coal` (#555555) no pasa WCAG AA para texto cuerpo (<18px regular). Usarlo solo para etiquetas de tamaño ≥18px o en negrita ≥14px, o en contextos puramente ornamentales como un ID de coach.

## 3. Typography

**Display Font:** Bebas Neue (sin-serif, condensed display)
**Body Font:** Inter (humanist sans-serif)

**Carácter:** Una pareja de contraste total. Bebas Neue no tiene versalitas ni letras minúsculas de ningún peso funcional — es un instrumento de una sola nota, y esa nota es la de una señal de advertencia que también es poética. Inter la ancla al suelo: legible, neutral, eficiente. Juntas dicen "esto es serio, y también es real".

### Hierarchy
- **Display** (Bebas Neue 400, clamp(56px→96px), leading 0.93, tracking -0.02em): Solo para el hero y el CTA final. El tamaño que declara intención.
- **Headline** (Bebas Neue 400, clamp(38px→64px), leading 1.02, tracking -0.01em): Títulos de sección. Coaches, Historia, el nombre del reto principal.
- **Title** (Bebas Neue 400, clamp(32px→52px), leading 1.0): Subtítulos dentro de secciones, nombres de retos secundarios.
- **Body** (Inter 400, 15px, leading 1.6): Descripciones, párrafos de contenido. Línea máxima 65ch. Color: blanco o Ceniza dependiendo de jerarquía.
- **Label** (Inter 700, 11px, tracking 0.12em, UPPERCASE): Metadatos técnicos: certificaciones, IDs de coach, reps de ejercicio. Solo cuando el dato es un dato, no cuando es una categoría narrativa.

### Named Rules
**La Regla de Las Mayúsculas.** Bebas Neue es uppercase por naturaleza. Nunca se usa como titular en sentence case o título case — eso no existe en este sistema. Si el copy tiene que susurrar, usa Inter.

**La Regla de la Escala.** El techo del clamp es 96px (6rem). Más grande que eso no es diseño, es un grito. El piso del display es 56px — por debajo de ese tamaño, perder la masa tipográfica de Bebas Neue no justifica su uso sobre Inter.

## 4. Elevation

Este es un sistema de capas tonales, no de sombras. La profundidad emerge de la escala de superficies (Abismo → S1 → S2), no de box-shadows. No hay sombras ambientales en el sistema.

**La excepción estructural:** Los flip cards de coaches usan `perspective: 1000px` + `transform-style: preserve-3d` para una revelación tridimensional. Esto es elevación-como-movimiento, no elevación-como-sombra. El efecto comunica que hay información escondida al otro lado, como un cartel que girás. Está reservado exclusivamente para este componente.

**Pseudo-elevación mediante opacidad:** El overlay radial `radial-gradient(ellipse, rgba(255,98,0,0.08) 0%, transparent 70%)` en el hero y en el CTA final crea un brillo de presencia sin sombra literal. Máximo uno por sección, y solo en secciones de hero weight.

### Named Rules
**La Regla del Piso Plano.** Ninguna tarjeta, lista o sección usa `box-shadow`. El apilamiento de superficies tonales (S1 sobre Abismo, S2 dentro de S1) es suficiente para la profundidad. Un box-shadow en este sistema dice "UI de 2016", no "calle antes del amanecer".

## 5. Components

### Buttons
Sólidos, directos, con peso físico. El hover eleva 2px como si el elemento despegara del suelo.

- **Shape:** Píldora completa (border-radius: 9999px). No hay botones cuadrados ni de radio pequeño en este sistema.
- **Primary:** Llama Industrial (#FF6200) como fondo, blanco como texto, Inter 700 14px, padding 14px 28px. Hover: fondo pasa a Llama Profunda (#cc4e00) + `translateY(-2px)`. Transition: 150ms ease.
- **Ghost:** Fondo transparente, borde `rgba(255,255,255,0.20)` 1px, texto blanco. Hover: borde a `rgba(255,255,255,0.40)` + `translateY(-2px)`. Mismo tamaño que primary para alineación en pares.
- **Focus-visible:** Outline 2px Llama Industrial, offset 3px. Nunca outline: none sin replacement.

### Chips y Tags
Dos variantes con roles distintos. Nunca mezclar en la misma lista.

- **Neutral:** bg surface-2 (#1a1a1a), borde boundary (#2a2a2a), texto ceniza (#888888), radius 6px, padding 4px 10px, Inter 700 10px uppercase tracking 0.12em. Para tags de categoría sin acción (especialidades del coach, niveles de reto).
- **Acento:** bg `rgba(255,98,0,0.10)`, borde `rgba(255,98,0,0.20)`, texto Llama Industrial, mismos proporciones. Para el estado activo, las tags seleccionadas, o datos que pertenecen a la marca.

### Cards / Contenedores
- **Corner Style:** radius 20px (cards estándar), 28px (featured cards, CTA principal). El radio grande es un privilegio de jerarquía — no para todas las cards.
- **Background:** Surface-1 (#111111) para cards principales; Surface-2 (#1a1a1a) para contenido anidado dentro de una card. Nunca tres niveles.
- **Shadow Strategy:** Ninguna. Ver Elevation.
- **Border:** `boundary` (#2a2a2a) 1px. En cards de acento activo: `rgba(255,98,0,0.30)–0.40` para señalar el estado destacado.
- **Internal Padding:** 20px (estándar), 32px (featured). Header de card siempre `p-5`, contenido de lista `px-3 py-2`.

### Coach Flip Card
El componente signature del sistema. 3D reveal sobre hover (desktop) o tap (mobile con clase `.flipped`).

- **Dimensiones:** 560px de altura fija. Columna de fotografía + tira de texto abajo en el frente. No comprimirlo por debajo de 480px.
- **Frente:** Surface-1 + border boundary. Foto a full-bleed con fade gradient al fondo. Badge de institución arriba izquierda (glass pill), badge "Ver perfil →" arriba derecha (Llama Industrial).
- **Reverso:** Surface-2 + border `rgba(255,98,0,0.30)`. Mini-foto circular con border naranja, bio completa, chips de acento, CTA a horarios.
- **Transición:** `transform: rotateY(180deg)`, 0.6s, `cubic-bezier(0.4, 0.2, 0.2, 1)`. No elastic, no spring.
- **A11y:** Añadir `prefers-reduced-motion` que crossfade en lugar de rotar si el usuario lo solicitó.

### Navigation
La nav es un instrumento de servicio, no un elemento de diseño. No compite con el contenido.

- **Style:** Fixed top, full-width, bg-abyss/80 backdrop-blur-md, borde inferior boundary 1px. La transparencia con blur es funcional (el usuario ve qué sección está debajo) — no decorativa.
- **Links:** Inter 500 13px, color Ceniza por default, blanco en hover. Transition 150ms.
- **Brand:** Logo 32px + "TS Calisthenics" en Bebas Neue 18px uppercase blanco.
- **Mobile:** Los links se ocultan en mobile (`hidden lg:flex`). **GAP PENDIENTE:** no hay hamburger menu. Agregar con `/impeccable craft mobile nav` o `/impeccable adapt`.

### Inputs
No existen inputs de formulario en la versión actual del landing. Cuando se agreguen: stroke 1px boundary, bg surface-2, radius 8px, focus ring 2px Llama Industrial offset 0.

## 6. Do's and Don'ts

### Do:
- **Do** reservar el naranja Industrial para acciones de primer nivel (CTA principal, estado activo, badge "Reto del mes"). Su escasez es lo que hace que esas acciones se sientan urgentes.
- **Do** usar fotografía real de los atletas y coaches. El sistema necesita cuerpos reales para sostener "La Calle Como Gimnasio" — el stock photo lo destruye en dos segundos.
- **Do** elevar los botones exactamente `translateY(-2px)` en hover. No 4px (demasiado), no 1px (imperceptible). La resistencia física se calibra.
- **Do** usar `prefers-reduced-motion: reduce` en todos los flip cards y marquees. El contenido debe ser visible aunque la animación no corra.
- **Do** escalar Bebas Neue solo dentro del rango `clamp(32px, 4vw, 96px)`. Más chico pierde la masa; más grande es un grito sin control.
- **Do** limitar la profundidad de cards a dos niveles: Surface-1 que contiene Surface-2. Nunca tres.

### Don't:
- **Don't** usar colores de cadenas de gym corporativas (azul/rojo genérico estilo SmartFit, Megatlón, Gold's Gym). La paleta tiene un solo calor y es el naranja industrial — todo lo demás es negro estructural.
- **Don't** agregar pasteles, cursiva motivacional, ni tonos wellness/yoga. Nada de `#f5f0eb`, nada de "Believe in yourself" en tipografía script. Ese es el anti-mundo exacto de este sistema.
- **Don't** usar `background-clip: text` con gradients para el texto. El naranja va sólido o no va.
- **Don't** poner una etiqueta uppercase pequeña sobre CADA sección ("HISTORIA", "RETOS", "COACHES" como kickers). Uno o dos usos es un sistema; en cada sección es gramática de AI. Si el contenido necesita contexto, dáselo con jerarquía tipográfica, no con un eyebrow.
- **Don't** usar `box-shadow` para profundidad. El sistema es tonal, no sombreado. Un shadow en este contexto grita "UI de app de 2016".
- **Don't** usar `border-left` de color como acento de cards o listas. Nunca. Usar border completo, tinte de fondo, o nada.
- **Don't** comprimir el flip card de coaches por debajo de 480px de altura. La foto necesita espacio para existir — el sistema depende de que las caras se vean reales.
- **Don't** agregar glassmorphism a elementos que no sean la nav. El blur de fondo en la nav está justificado (orientación espacial). En cards o modales es decoración, y la decoración está prohibida.
