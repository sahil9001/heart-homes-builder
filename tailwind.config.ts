
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#0D0B09',
        foreground: '#EDE8DE',
        surface: '#161310',
        primary: {
          DEFAULT: '#D4A843',
          foreground: '#0D0B09',
          hover: '#E8C56A',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        accent: {
          DEFAULT: '#D4A843',
          foreground: '#0D0B09'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: '#1E1A16',
          foreground: '#7A7167'
        },
        popover: {
          DEFAULT: '#161310',
          foreground: '#EDE8DE'
        },
        card: {
          DEFAULT: '#161310',
          foreground: '#EDE8DE'
        },
        gold: {
          DEFAULT: '#D4A843',
          light: '#E8C56A',
          dark: '#B88D2E',
        },
        concrete: {
          50: '#EDE8DE',
          100: '#D5CDBD',
          200: '#B8AE99',
          300: '#9A8F7A',
          400: '#7A7167',
          500: '#5A5249',
          600: '#3A342E',
          700: '#2E2820',
          800: '#1E1A16',
          900: '#161310',
          950: '#0D0B09',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.5)',
        'gold-glow': '0 0 30px rgba(212,168,67,0.25)',
        'gold-sm': '0 0 12px rgba(212,168,67,0.15)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: '1rem',
        '2xl': '1.5rem'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": "marquee 30s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      fontFamily: {
        'sans': ['"DM Sans"', 'sans-serif'],
        'display': ['"Playfair Display"', 'Georgia', 'serif'],
        'mono': ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
