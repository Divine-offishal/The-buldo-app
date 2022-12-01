module.exports = {
  // purge: [],
  // darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{js,jsx}"],
  important: true,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      seagreen: '#69E6A6',
      white: "#ffffff",
      black: "#040408",
      bermuda: "#0A2640"
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'bermuda':"#0A2640",
      'light': "#ffffff",
      'seagreen': '#69E6A6',
      'dark': '#040408aa'
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
