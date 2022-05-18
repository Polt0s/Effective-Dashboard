module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './shared/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        screens: {
            'mobile': '640px',
            // => @media (min-width: 640px) { ... }
            'tablet': '1024px',
            'desktop': '1280px',
        },
        colors: {
            'white': '#FFFFFF',
            'black': '#000000',
            'blue': '#1fb6ff',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'gray-dark': '#455560',
            'gray': '#7f7f7f',
            'gray-light': '#d3dce6',
            'bg-modal': 'rgba(0, 0, 0, .5)',
            'orange-main': '#d68102',
            'shadow-main': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            'shadow-window': '0px 2px 5px rgba(38, 53, 104, 0.25)'
        },
        extend: {
            fontSize: {
                sm: ['14px', '20px'], // font-size/line-height
                base: ['16px', '24px'],
                lg: ['20px', '28px'],
                xl: ['1.5rem', '2rem'],
            },
            spacing: {},
            borderRadius: {}
        },
    },
    plugins: [],
};