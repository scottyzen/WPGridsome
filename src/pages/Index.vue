<template>
  <Layout>
    <div class="relative">
      <HeroImage />
      <div
        class="absolute top-0 left-0 flex items-end w-full h-full md:items-center"
      >
        <div
          class="w-full max-w-xl p-8 ml-auto text-white lg:max-w-2xl md:mt-8 lg:mr-8 fade-in-up"
        >
          <h1
            class="max-w-md mt-8 mb-4 text-3xl font-bold tracking-tight lg:max-w-xl sm:text-4xl md:tracking-normal md:mb-6 lg:text-5xl"
          >
            Full featured WordPress started for Gridsome!
          </h1>
          <p
            class="max-w-lg leading-tight tracking-tight md:text-lg md:leading-normal md:tracking-normal"
          >
            WPGridsome combines the familiarity of WordPress with the
            performance of Gridsome by leveraging the modern JAMstack approach.
            That means taking away as many tasks as possible and pushing them to
            the client, as a result, fewer server requests are made, meaning
            better performance and faster load times.
          </p>
          <div class="mt-4 mb-2 md:mt-10">
            <g-link
              class="inline-block p-2 text-sm leading-none text-center text-gray-900 bg-white border border-white rounded md:px-8 md:py-3 md:text-lg"
              to="/posts"
              >View Post Page</g-link
            >
            <a
              class="inline-block p-2 ml-4 text-sm leading-none text-center text-white border border-gray-300 rounded md:px-8 md:py-3 md:text-lg"
              href="/gettng-started"
              >Setup guide</a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="container my-24 text-center">
      <h2 class="mb-2 text-4xl font-semibold">So, how fast are we talking?</h2>
      <p class="text-lg font-light">Check below to see for youself</p>
      <div class="grid max-w-4xl gap-8 p-4 mx-auto my-8 md:grid-cols-3">
        <a
          class="block w-full py-6 transition-all duration-150 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-500 dark:border-gray-900 dark:bg-gray-800 external-link"
          href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwpgridsome.com%2F"
          target="_blank"
          rel="noopener noreferrer"
        >
          PageSpeed Insights
        </a>
        <a
          class="block w-full py-6 transition-all duration-150 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-500 dark:border-gray-900 dark:bg-gray-800 external-link"
          href="https://gtmetrix.com/reports/woogridsome.com/TMB7at2w"
          target="_blank"
          rel="noopener noreferrer"
          >GTmetrix</a
        >
        <a
          class="block w-full py-6 transition-all duration-150 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-500 dark:border-gray-900 dark:bg-gray-800 external-link"
          href="https://webpagetest.org/result/210424_AiDcYB_e78714a63465d1ee47842bd203cfbd68/"
          target="_blank"
          rel="noopener noreferrer"
          >WebPageTest</a
        >
      </div>
    </div>

    <div class="container my-24">
      <div class="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-2">
        <div>
          <h2 class="text-lg font-bold">Better Performance</h2>
          <p class="max-w-lg mb-8 font-light dark:text-gray-200">
            Why wait for pages to build on the fly when you can generate them at
            deploy time? When it comes to minimizing the time to first byte,
            nothing beats pre-built files served over a CDN.
          </p>
          <h2 class="text-lg font-bold">Higher Security</h2>
          <p class="max-w-lg mb-8 font-light dark:text-gray-200">
            With server-side processes abstracted into microservice APIs,
            surface areas for attacks are reduced. You can also leverage the
            domain expertise of specialist third-party services.
          </p>
          <h2 class="text-lg font-bold">Cheaper, Easier Scaling</h2>
          <p class="max-w-lg mb-8 font-light dark:text-gray-200">
            When your deployment amounts to a stack of files that can be served
            anywhere, scaling is a matter of serving those files in more places.
            CDNs are perfect for this, and often include scaling in all of their
            plans.
          </p>
          <h2 class="text-lg font-bold">Better Developer Experience</h2>
          <p class="max-w-lg mb-8 font-light dark:text-gray-300">
            Loose coupling and separation of controls allow for more targeted
            development and debugging, and the expanding selection of CMS
            options for site generators remove the need to maintain a separate
            stack for content and marketing.
          </p>
        </div>
        <div>
          <picture>
            <source
              srcset="/egg.avif"
              type="image/avif"
              width="480"
              height="480"
              loading="lazy"
            />
            <img
              alt="Image of a cheetah"
              src="../assets/images/egg.png"
              width="480"
              height="480"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

<script>
import HeroImage from "../components/UI/HeroImage.vue";

export default {
  metaInfo() {
    const pathUrl = `${this.$static.metadata.siteUrl}${this.$route.path}`;
    return {
      title: "Next Generation Front-End for WooCommerce",
      description:
        "WooGridsome is a fully loaded ecommerce starter for Gridsome that is powered by WooCommerce",
      link: [{ rel: "canonical", href: pathUrl }],
      meta: [{ key: "og:url", property: "og:url", content: pathUrl }],
    };
  },
  components: {
    HeroImage,
  },
};
</script>

<style scoped>
.fade-in-up {
  animation: fade-in-up 600ms ease-in 800ms forwards;
}
.fade-in-up {
  opacity: 0;
  transform: translateY(5px);
}
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>
