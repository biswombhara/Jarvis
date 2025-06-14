/** @type {import('tailwindcss').Config} */
import withMT from"@material-tailwind/react/utils/withMT";
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm':  {'max': '481px'},
      // => @media (min-width: 640px) { ... }

      'md': {'max': '768px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'max': '1024px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {'max': '1280px'},
      // => @media (min-width: 1280px) { ... }

      '2xl': {'max': '1536px'},
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
})