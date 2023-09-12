import type { Config } from 'tailwindcss'

import form from '@tailwindcss/forms'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: "#F2F5FF",
        primary: "#D7263D",
        primaryBold: "#A90F23",
        text: "#020300c5"

      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),

  ],
}
export default config
