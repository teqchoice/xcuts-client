import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        'primary-100': '#fad2d4',
        'primary-200': '#f5a5a8',
        'primary-300': '#f0787d',
        'primary-400': '#eb4b51',
        primary: '#e11e26',
        'primary-600': '#b4181e',
        'primary-700': '#871219',
        'primary-800': '#5a0c11',
        'primary-900': '#2d0608'
      }
    }
  },
  plugins: []
}
export default config
