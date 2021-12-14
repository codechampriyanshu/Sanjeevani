const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
        'xs': '435px',
        'between' : '512px',
        'sm' : '640px',
        'md' : '768px',
        'bnine': '900px',
        'lg' : '1024px',
        'xl' : '1280px',
        '2xl' : '1536px',
    },
    extend: {
        // backgroundImage: {
        //     'hero-pattern':`url(${process.env.PUBLIC_URL}/images/bubbles.svg)`
        // },
      colors: {
          
      },
      fontFamily: {
          sans: ["'Poppins'", ...defaultTheme.fontFamily.sans],
      },
      //font customization help: https://www.youtube.com/watch?v=sOnBG2wUm1s
      },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
}
