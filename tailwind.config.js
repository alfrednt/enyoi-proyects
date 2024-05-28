/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['/src/**/*.{html,js}',
  "./index.html",
  "./src/app.js"
  ],
  theme: {
      extend: {
        colors: {
          "primary": "#f2f7fd",
          "primary-alt": "#8cb9ed",
          "secondary": "#173663",
          "secondary-alt": "#0f2342"},
        },
        fontFamily: {
          "primary": '"Poppins", sans-serif',
          "primary-alt": '"Montserrat Alternates", sans-serif',
          "secondary": '"Merriweather", serif',
          "secondary-alt": '"Raleway", sans-serif',
        },
  },
  plugins: [],
}

