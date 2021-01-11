// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import PageTitle from '~/components/PageTitle.vue';
import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('PageTitle', PageTitle)

  head.link.push({
    rel: "icon",
    href: "/favicon.svg"
  });

  // Add a meta tag
  head.meta.push({
    name: 'description',
    content: 'A starter for Gridsome using WordPress and WPGraphQL'
  })

  // Add an external JavaScript before the closing </body> tag
  head.script.push({
    src: 'https://js.stripe.com/v3/'
  })
}
