module.exports = {
    theme: {
      container: {
        center: true,
        padding: '2rem'
      },
    },
    variants: {},
    plugins: [],
    purge: {
      enabled: true,
      content: [
        "components/**/*.vue",
        "layouts/**/*.vue",
        "pages/**/*.vue",
        "templates/**/*.js",
        "gridsome.config.js"
      ]
    }
  }
  