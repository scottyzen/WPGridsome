module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      "./src/components/**/*.vue",
      "./src/layouts/**/*.vue",
      "./src/pages/**/*.vue",
      "./src/templates/**/*.vue",
      "./gridsome.config.js"
    ]
  }
}
