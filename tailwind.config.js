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
      backgroundImage:theme=>({
        'h-teal':"url('images/h-teal.png')",
        'h-purple':"url('images/h-purple.png')"
      })
      /*
      animation:{
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes:{
        spin:{
          from:{transform: 'rotate(0deg)'},
          to:{ transform: 'rotate(360deg)'}
        }
      }
      */
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover','focus'],
      animation: ['hover','focus'],
      transform: ['hover','focus'],
      transitionProperty: ['hover','focus'],
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}

// npx tailwindcss build main.css -o output.css