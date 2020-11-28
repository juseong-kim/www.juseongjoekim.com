module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      sans: ['Nunito','sans-serif'],
      display: ['Nunito','sans-serif'],
      body: ['Nunito','sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
  purge:{
    enabled:true;
    content:[
      './**/*.html'
    ]
  }
}

// npx tailwindcss build main.css -o output.css