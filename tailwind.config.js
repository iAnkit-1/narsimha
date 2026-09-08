/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#080808',
          secondary: '#0D0D0D',
          elevated: '#111111',
          card: '#151515',
          cardHover: '#1A1A1A',
        },
        border: {
          subtle: '#272727',
          active: '#FF7711',
        },
        text: {
          primary: '#F1F1F1',
          secondary: '#A1A1A1',
          muted: '#707070',
        },
        brand: {
          orange: '#FF7711',
          orangeHover: '#FF8A33',
          deepOrange: '#C94F00',
          orangeMuted: 'rgba(255, 119, 17, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        handwriting: ['Caveat', 'cursive'],
        caveat: ['Caveat', 'cursive'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      boxShadow: {
        'orange-glow': '0 0 25px -5px rgba(255, 119, 17, 0.25)',
        'orange-subtle': '0 0 15px -3px rgba(255, 119, 17, 0.15)',
      },
      backgroundImage: {
        'radial-gradient-hero': 'radial-gradient(circle at 70% 30%, rgba(255, 119, 17, 0.08) 0%, rgba(8, 8, 8, 0) 70%)',
        'grid-pattern': "radial-gradient(circle, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
