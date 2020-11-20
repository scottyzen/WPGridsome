// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: 'WPGridsome',
  plugins: [
    {
      use: 'gridsome-source-graphql',
      options: {
        url: process.env.GRAPHQL_URL,
        fieldName: 'wp',
        typeName: 'WordPress'
      },
    }, {
      use: "gridsome-plugin-tailwindcss",
      options: {
        shouldImport: true
      },
    }
  ]
}
