/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}', './node_modules/flowbite/**/*.js'],

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
                indexbg: "url('../src/assets/background.png')",
                heroesbg: "url('../src/assets/bg.jpg')",
            },
            maxWidth: {
                card: '16rem',
            },
            minHeight: {
                picture: '10rem',
            },
            screens: {
                ns: { raw: '(max-width: 640px)' },
                cardInfo: { raw: '(max-width: 850px)' },
                ssm: { raw: '(max-width: 360px)' },
                sm400px: { raw: '(max-width: 400px)' },
                sm400pxmin: { raw: '(min-width: 401px)' },
                // md: { raw: '(max-height: 768px),(min-width:641px)' },
                // lg: { raw: '(max-height: 1024px),(min-width:769px)' },
            },
            height: {
                ch: '35rem',
                hc: '47.5rem',
                card: '350px',
            },
            width: {
                image: '30rem',
                infocard: '50rem',
                infocardmdscreen: '35rem',
            },
        },
    },
    plugins: [
        require('@savvywombat/tailwindcss-grid-areas'),
        require('tailwind-scrollbar-hide'),
        require('flowbite/plugin'),
    ],
};
