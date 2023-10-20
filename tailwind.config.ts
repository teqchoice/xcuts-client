import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        'primary': '#e11e26'
      }
    }
  },
  plugins: []
}
export default config
