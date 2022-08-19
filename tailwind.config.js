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
            },
        },
    },
    plugins: [require('@savvywombat/tailwindcss-grid-areas')],
};
