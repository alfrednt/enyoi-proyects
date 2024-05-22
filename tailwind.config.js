/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['/src/**/*.{html,js}',
  "./index.html",
  ],
  theme: {
      extend: {
        colors: {
          "primary": "#daf2ff",
          "primary-alt": "#34a9fd",
          "secondary": "#195db4",
          "secondary-alt": "#153156"},
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

