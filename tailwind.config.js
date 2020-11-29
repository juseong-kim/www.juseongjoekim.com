module.exports = {
  purge: [
    './**/*.html',
    './**/*.js'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily:{
      sans: ['Nunito','sans-serif'],
      display: ['Nunito','sans-serif'],
      body: ['Nunito','sans-serif']
    },
    extend: {
      animation:{
        'spin-slow': 'spin 3s linear infinite'
      }
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover','focus'],
      animation: ['hover','focus']
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}

// npx tailwindcss build main.css -o output.css