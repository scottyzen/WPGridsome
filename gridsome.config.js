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
          // Service Worker Options
          disableServiceWorker: false,
          serviceWorkerPath: 'service-worker.js',
          cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',

          // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
          manifestPath: 'manifest.json',
          title: 'WPGridsome',
          startUrl: '/',
          display: 'standalone',
          statusBarStyle: 'default',
          themeColor: '#F7901F',
          backgroundColor: '#E8EDF8',
          icon: 'favicon.svg',
          shortName: 'WPGridsome',              // Optional
          description: 'About Gridsome WordPress Starter using WPGraphql',// Optional
          categories: ['Technology', 'Web', 'Development'],          // Optional
          lang: 'en-GB',                      // Optional
          maskableIcon: true,                 // Optional

          // Standard Meta Tags
          svgFavicon: 'favicon.svg',          // Optional. Requires favicon.ico fallback
      }
  }
  ]
}
