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
        typeName: 'WordPress',

        headers: {
          Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
        },
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'G-B7EWR7EDJ2'
      }
    }
  ]
}
