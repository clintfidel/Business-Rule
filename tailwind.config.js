module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        "inbev-main": "#971B1E",
        "inbev-mute": "#F3F5FA",
        "inbev-accurate": "#E02124",
        "inbev-validation": "#331D0C",
        "inbev-total": "#F7951D",
        "inbev-primary-text": "#162A56",
        "inbev-secondary-text": "#1D2029",
      },
    },
    fontFamily: {
      customRoboto: ["Roboto", "sans-serif"],
      customBarlow: ["Barlow", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
