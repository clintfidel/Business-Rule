module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "inbev-main": "#971B1E",
      "inbev-mute": "#F3F5FA",
      "inbev-accurate": "#E02124",
      "inbev-validation": "#331D0C",
      "inbev-total": "#F7951D",
      "inbev-primary-text": "#162A56",
      "inbev-secondary-text": "#1D2029",
      
    },
  }, 
  variants: {
    extend: {},
  },
  plugins: [],
}
