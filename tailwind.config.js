module.exports = {
    purge: {
        enabled: false,
        content: [
            './dist/*.html',
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                '3xl': '2000px',
            },
            backgroundImage: theme => ({
                'home': "url('../assets/img/home.jpg')",
                'voor-na': "url('../assets/img/voor_na.png')"
            }),
            maxWidth: {
                'xxs': '15rem',
                '8xl': '85rem'
            },
            minHeight: {
                '50': '50vh'
            },
            spacing: {
                '128': '32rem',
            }
        },
    },
    variants: {
        extend: {
            borderWidth: ['hover', 'focus', 'active', 'visited'],
        },
    },
    plugins: [
        // ...
        require('tailwindcss'),
        require('autoprefixer'),
        require('@tailwindcss/forms'),
        // ...
    ]
}
