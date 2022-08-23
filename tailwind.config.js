/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            gridTemplateAreas: {
                layout: ['header header header', 'main main main'],
            },
            gridTemplateColumns: {
                layout: '1fr 4fr 1fr;',
            },
            gridTemplateRows: {
                layout: '5rem 1fr',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif;'],
            },
            backgroundImage: {
                background: "url('../src/assets/background.png')",
                heroesbg: "url('../src/assets/bg.jpg')",
            },
            maxWidth: {
                card: '16rem',
            },
            minHeight: {
                picture: '10rem',
            },
            screens: {
                ns: { raw: '(max-width: 600px)' },
                // md: { raw: '(max-height: 768px),(min-width:641px)' },
                // lg: { raw: '(max-height: 1024px),(min-width:769px)' },
            },
        },
    },
    plugins: [
        require('@savvywombat/tailwindcss-grid-areas'),
        require('tailwind-scrollbar-hide'),
    ],
};
