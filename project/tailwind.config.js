/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        surface2: 'rgb(var(--c-surface2) / <alpha-value>)',
        border: 'rgb(var(--c-border) / <alpha-value>)',
        primary: 'rgb(var(--c-primary) / <alpha-value>)',
        primaryDark: 'rgb(var(--c-primary-dark) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        text: 'rgb(var(--c-text) / <alpha-value>)',
        textMuted: 'rgb(var(--c-text-muted) / <alpha-value>)',
        success: 'rgb(var(--c-success) / <alpha-value>)',
        warning: 'rgb(var(--c-warning) / <alpha-value>)',
        error: 'rgb(var(--c-error) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        card: '0 2px 12px -2px rgba(0,0,0,0.12), 0 1px 3px -1px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 30px -8px rgba(0,0,0,0.25), 0 2px 8px -2px rgba(0,0,0,0.12)',
        glow: '0 0 24px -6px rgba(67,184,121,0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.35s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};
