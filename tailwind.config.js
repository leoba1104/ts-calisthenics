/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:        '#0a0a0a',
        surface:   '#111111',
        surface2:  '#1a1a1a',
        border:    '#2a2a2a',
        accent:    '#FF6200',
        'accent-dim': '#cc4e00',
        muted:     '#888888',
        sub:       '#555555',
        // shadcn token aliases
        background:        '#0a0a0a',
        foreground:        '#ffffff',
        card:              '#111111',
        'card-foreground': '#ffffff',
        'muted-foreground':'#888888',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        xl:    '12px',
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '28px',
      },
      animation: {
        'marquee':          'marquee var(--duration) infinite linear',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to:   { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },
    },
  },
  plugins: [],
}
