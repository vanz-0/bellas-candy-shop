import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'bella-pink': '#FF6B9D',
                'bella-orange': '#FFA726',
                'bella-yellow': '#FFD54F',
                'bella-purple': '#AB47BC',
                'bella-blue': '#42A5F5',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                fredoka: ['Fredoka', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
export default config
