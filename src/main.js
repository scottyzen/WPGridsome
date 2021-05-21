// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
// import VueFuse from "vue-fuse";
import PageTitle from "~/components/PageTitle.vue";
import DefaultLayout from "~/layouts/Default.vue";
import { yoastHead } from "../src/mixins/yoastHead";
import VueLazyLoad from "vue-lazyload";

export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("PageTitle", PageTitle);

  // Vue.use(VueFuse);
  // if (isClient) {
  // }
  if (isClient) {
    Vue.use(VueLazyLoad);
  }

  Vue.mixin(yoastHead);

  // head.link.push({
  //   rel: "preconnect",
  //   href: "https://fonts.gstatic.com",
  // });
  // head.link.push({
  //   rel: "stylesheet",
  //   href: "https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap",
  // });
}
