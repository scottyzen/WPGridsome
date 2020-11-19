// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

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
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
      }
    }
  ]
}
