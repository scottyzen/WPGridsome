// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import VueFuse from 'vue-fuse'
import PageTitle from '~/components/PageTitle.vue'
import DefaultLayout from '~/layouts/Default.vue'
import { yoastHead } from '../src/mixins/yoastHead'

export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('PageTitle', PageTitle)

  Vue.use(VueFuse)
  Vue.mixin(yoastHead)

  head.link.push({
    rel: 'icon',
    href: '/favicon.svg',
  })

  // Add a meta tag
  head.meta.push({
    name: 'description',
    content: 'A starter for Gridsome using WordPress and WPGraphQL',
  })
}
