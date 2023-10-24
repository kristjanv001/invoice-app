import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-spartan)'],
      },
      colors: {
        "carbonBlue": "#373B53", // header bg
        "blueIndigo": "#494E6E", // header divider
        "baiPearl": "#F8F8FB", // bg light
        "ruinedSmores": "#0C0E16", // text
        "impression": "#888EB0", // label text
        "venetianNights": "#7C5DFA", // primary btn bg
        "forgottenPurple": "#9277FF" // primargy btn bg hover
      }
    },
  },
  plugins: [],
}
export default config
