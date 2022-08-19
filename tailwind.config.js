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
                layout: '4rem 1fr',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif;'],
            },
        },
    },
    plugins: [require('@savvywombat/tailwindcss-grid-areas')],
};
