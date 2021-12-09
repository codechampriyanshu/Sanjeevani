const defaultTheme = require("tailwindcss/defaultTheme");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
      if (opacityValue !== undefined) {
          return `rgba(var(${variableName}), ${opacityValue})`;
      }
      return `rgb(var(${variableName}))`;
  };
}

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
          custom: {
              primary: withOpacity("--color-primary"),
              secondary: withOpacity("--color-secondary"),
              accent: withOpacity("--color-accent"),
              muted: withOpacity("--color-muted"),
          },
      }, //usage: text-custom-primary  or text-custom-accent
      backgroundColor: {
          custom: {
              primary: withOpacity("--bg-primary"),
              secondary: withOpacity("--bg-secondary"),
              muted: withOpacity("--bg-muted"),
          },
      }, //usage: bg-custom-primary
      gradientColorStops: {
          custom: {
              hue: withOpacity("--color-fill"),
          },
      }, //usage: you can use the name in gradient's to via and from classes
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
