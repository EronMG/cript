/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{js,jsx}']
export const mode = 'jit'
export const theme = {
    extend: {
        colors: {
            primary: '#131722',
            primaryBg: '#1B1D28',
            darkGray: '#23262F',
            gray: '#B1B5C3',
            blueGradient: 'rgba(68, 120, 255, 1)',
            redGradient: 'rgba(255, 51, 71, 1)',
            blue: '#4478FF'
        },
        fontFamily: {
            mono: ['Roboto Mono', 'serif']
        }
    },
    screens: {
        xx: '390px',
        xs: '480px',
        dd: '568px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px'
    }
}
export const plugins = []
