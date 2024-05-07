/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Manrope', 'sans-serif'],
      },
      colors: {
        neutral: {
          100: 'hsl(210, 46%, 95%)',
          200: 'hsl(212, 23%, 69%)',
          300: 'hsl(214, 17%, 51%)',
          400: 'hsl(217, 19%, 35%)',
        }
      }
    },
  },
  plugins: [],
}


// - Very Dark Grayish Blue: hsl(217, 19%, 35%)
// - Desaturated Dark Blue: hsl(214, 17%, 51%)
// - Grayish Blue: hsl(212, 23%, 69%)
// - Light Grayish Blue: hsl(210, 46%, 95%)