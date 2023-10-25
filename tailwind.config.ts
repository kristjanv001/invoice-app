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
        // header bg
        "carbon_blue": "#373B53",

        // header divider
        "blue_indigo": "#494E6E",

        // labels
        "dark_shamrock": "#33D69F",
        "princeton_orange": "#FF8F00",

        // design system
        "venetian_nights": "#7C5DFA",
        "forgotten_purple": "#9277FF",
        "kon": "#1E2139",
        "royal_curtsy": "#252945",
        "stoic_white": "#DFE3FA",
        "purple_impression": "#888EB0",
        "true_lavender": "#7E88C3",
        "ruined_smores": "#0C0E16",
        "khmer_curry": "#EC5757",
        "american_pink": "#FF9797",
        "zhenzhubai_pearl": "#F8F8FB",
        "river_styx": "#141625",
      }
    },
  },
  plugins: [],
}
export default config
