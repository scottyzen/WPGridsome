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
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'WPGridsome',
        disableServiceWorker: false,
        shortName: 'WPGridsome',
        themeColor: '#3590d5',
        backgroundColor: '#3590d5',
        icon: './src/favicon.png',
        msTileColor: '#3590d5',
      },
    },
  ]
}
