/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF5F1',
          100: '#FFE4D6',
          200: '#FFCBB3',
          300: '#FFB085',
          400: '#FF8A50',
          500: '#FF6B2B',
          600: '#E55A1F',
          700: '#CC4919',
          800: '#B03E17',
          900: '#8F3414',
        },
        warm: {
          50: '#FEFDFB',
          100: '#FDF9F4',
          200: '#FAF1E8',
          300: '#F5E6D3',
          400: '#EDD5B7',
          500: '#E3C193',
          600: '#D4A574',
          700: '#C2855A',
          800: '#A66B47',
          900: '#8B5A3C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, rgba(255, 138, 80, 0.1) 0%, rgba(255, 228, 214, 0.1) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};