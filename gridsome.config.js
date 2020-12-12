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
      }
    }, {
      use: "gridsome-plugin-tailwindcss",
      options: {
        shouldTimeTravel: true
      }
    },
    {
        use: 'gridsome-plugin-pwa',
        options: {
            // Service Worker Options
            disableServiceWorker: false,
            serviceWorkerPath: 'service-worker.js',
            cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',
            disableTemplatedUrls: false,       // Optional

            // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
            manifestPath: 'manifest.json',
            title: 'WPGridsome',
            startUrl: '/',
            display: 'standalone',
            statusBarStyle: 'default',
            themeColor: '#666600',
            backgroundColor: '#ffffff',
            icon: '',
            shortName: 'WPGridsome',            // Optional
            description: 'Gridsome is awesome!',// Optional
            categories: ['development'],        // Optional
            lang: 'en-GB',                      // Optional
            dir: 'auto',                        // Optional
            maskableIcon: true,                 // Optional
            gcmSenderId: undefined,             // Optional

            // Standard Meta Tags
            svgFavicon: 'favicon.svg',          // Optional. Requires favicon.ico fallback

            // Microsoft Windows Meta Tags
            msTileColor: '#666600',             // Optional

            // Apple MacOS Meta Tags
            appleMaskIcon: 'favicon.svg',       // Optional
            appleMaskIconColor: '#666600',      // Optional
        }
    }
  ]
}
