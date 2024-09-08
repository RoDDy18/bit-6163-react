/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#0d0e11'
      },
      backgroundImage: {
        'snow': "url('/src/assets/snow.jpeg')",
        'snow-1': "url('/src/assets/snow-1.png')",
        'books': "url('/src/assets/book.jpg')",
        'books-1': "url('/src/assets/book-1.png')",
      },
      fontFamily:{
        'poppins': '"Poppins", system-ui'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

