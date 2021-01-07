module.exports = {
    purge: [
        './**/*.html',
        './**/*.js'
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Nunito', 'sans-serif'],
            display: ['Nunito', 'sans-serif'],
            body: ['Nunito', 'sans-serif']
        },
        extend: {
            colors:{
                beelue:{
                    light: '#006098',
                    dark: '#0075a9',
                }
            },
            backgroundImage: theme => ({
                'h-teal': "url('images/h-teal.png')",
                'h-purple': "url('images/h-purple.png')"
            }),
            keyframes: {
                wiggle: {
                    '0%, 100%': {transform: 'rotate(-3deg)'},
                    '50%': {transform: 'rotate(3deg)'},
                },
                roll: {
                    '0%, 100%': {transform: 'translateX(0) rotate(0deg)'},
                    '50%': {transform: 'translateX(20rem) rotate(385deg)'}
                }
            },
            animations: {
                'bounce-slow': 'bounce 2s infinite',
                wiggle: 'wiggle 1s ease-in-out infinite',
                roll: 'roll 3s ease-in-out infinite'
            }
        },
    },
    variants: {
        extend: {
            backgroundImage: ['hover', 'focus'],
            animation: ['hover', 'focus'],
            transform: ['hover', 'focus'],
            transitionProperty: ['hover', 'focus'],
        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}

// npx tailwindcss build main.css -o output.css