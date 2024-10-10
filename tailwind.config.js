/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            desktop: { 'min': '720px' },
            mobile: { 'max': '520px' },
        },
        extend: {
            fontFamily: {
                // Define your fonts here.
                climate: ['Climate Crisis', 'serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            animation: {
                // Define your animations here.
                shake: 'shake 1s ease-in-out infinite alternate',
                spin: 'spin 0.5s ease-in-out alternate',
                fade: 'fade 1s cubic-bezier( 0.175, 0.885, 0.32, 1.5 ) forwards',
            },
            keyframes: {
                // Create keyframe animations here.
                shake: {
                    '0%': { transform: 'rotateZ( 10deg )' },
                    '50%': { transform: 'rotateZ( -10deg )' },
                    '100%': { transform: 'rotateZ( 10deg )' },
                },
                spin: {
                    '0%': { transform: 'rotateY( 0deg )' },
                    '50%': { transform: 'rotateY( 90deg )' },
                    '100%': { transform: 'rotateY( 0deg )' },
                },
                fade: {
                    '0%': { transform: 'translateY( 125% )', opacity: '0' },
                    '100%': { transform: 'translateY( 0 )', opacity: '100%' },
                },
            },
        },
        colors: {
            transparent: 'transparent',
            white: '#ffffff',
            black: '#000000',
            pink: {
                100: '#F9D7E7',
                500: '#D31A74',
                900: '#8F124E',
            },
            yellow: {
                100: '#FFF1BE',
                500: '#F4B13E',
                900: '#CC8100',
            },
            green: {
                100: '#F2F8E0',
                500: '#B8D94C',
                900: '#769A00',
            },
            blue: {
                100: '#D2D2ED',
                500: '#312FAA',
                900: '#313083',
            },
            grey: {
                100: '#FFFDF5',
                500: '#635D55',
                900: '#403931',
            },
        },
    },
    plugins: [
        // Animation Delay
        require("tailwindcss-animation-delay"),
    ],
}

