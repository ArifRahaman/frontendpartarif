/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // theme: {
  //   extend: {},
  // },
  theme: {
    extend: {
      animation: {
        'border-glow': 'glow 2s ease-in-out infinite',
        'bg-move': 'bgShift 10s ease infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px 5px rgba(255, 105, 180, 0.5)' },
          '50%': { boxShadow: '0 0 20px 10px rgba(255, 105, 180, 0.8)' },
        },
        bgShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};

