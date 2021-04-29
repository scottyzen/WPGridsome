// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: 'WPGridsome',
  siteUrl: `https://${process.env.DOMAIN}`,
  siteDescription: 'Full featured WordPress started for Gridsome!',
  titleTemplate: '%s - WPGrridsome',
  icon: {
    favicon: './src/favicon.png',
    touchicon: './src/favicon.png',
  },
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: process.env.WORDPRESS_URL, // required
        apiBase: 'wp-json',
        typeName: 'WordPress',
        perPage: 100,
        concurrent: 10,
      },
    },
    {
      use: 'gridsome-source-graphql',
      options: {
        url: `${process.env.WORDPRESS_URL}/graphql`,
        fieldName: 'gql',
        typeName: 'gql',

        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.ADMIN_USERNAME}:${process.env.ADMIN_PASSWORD}`
          ).toString('base64')}`,
        },
      },
    },
    { use: 'gridsome-plugin-tailwindcss' },
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        original: true,
        typeName: 'WordPressAttachment',
        sourceField: 'sourceUrl',
        targetField: 'imageDownloaded',
        targetPath: './src/assets/remoteImages',
      },
    },

    {
      use: 'gridsome-plugin-pwa',
      options: {
        // Service Worker Options
        disableServiceWorker: false,
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',
        disableTemplatedUrls: false, // Optional

        // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
        manifestPath: 'manifest.json',
        title: 'WooGridsome',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        themeColor: '#666600',
        backgroundColor: '#ffffff',
        icon: './src/favicon.png', // must be provided like 'src/favicon.png'
        shortName: 'WooGridsome', // Optional
        description: 'Full featured WordPress started for Gridsome!', // Optional
        categories: ['development'], // Optional
        lang: 'en-GB', // Optional
        dir: 'auto', // Optional
        maskableIcon: true, // Optional
        gcmSenderId: undefined, // Optional

        // Standard Meta Tags
        svgFavicon: 'favicon.svg', // Optional. Requires favicon.ico fallback

        // Microsoft Windows Meta Tags
        msTileColor: '#666600', // Optional

        // Apple MacOS Meta Tags
        appleMaskIcon: 'src/favicon.png', // Optional
        appleMaskIconColor: '#666600', // Optional
      },
    },
  ],
  templates: {
    WordPressPost: '/post/:slug',
    WordPressCategory: '/category/:slug',
  },
}
