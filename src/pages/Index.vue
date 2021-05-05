<template>
  <Layout>
    <div class="relative">
      <HeroImage />
      <div class="absolute top-0 flex items-center w-full h-full px-4 mx-auto">
        <div class="container">
          <div class="w-full max-w-2xl text-white 0 lg:max-w-2xl fade-in-up">
            <h1 class="mb-2 font-semibold">SURFACE MAGIC</h1>
            <h2 class="max-w-lg mb-4 text-3xl font-bold md:text-5xl">
              Surface Magic Are Ireland’s Number One Surface Repair
            </h2>
            <p class="max-w-lg mb-12">
              Get in touch with us today to see how we can help you. We cover
              nationwide and operate across multiple sectors.
            </p>
            <g-link class="text-lg button" to="/contact">Contact Us</g-link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteUrl
    siteDescription
    siteName
  }
}
</static-query>

<script>
import HeroImage from "../components/UI/HeroImage.vue";

export default {
  metaInfo() {
    const pathUrl = `${this.$static.metadata.siteUrl}${this.$route.path}`;
    return {
      title: "Home",
      description: this.$static.metadata.siteDescription,
      link: [{ rel: "canonical", href: pathUrl }],
      meta: [{ key: "og:url", property: "og:url", content: pathUrl }],
    };
  },
  components: {
    HeroImage,
  },
};
</script>

<style lang="postcss">
.button {
  @apply inline-block px-6 py-3 font-semibold leading-none text-white tracking-wide bg-primary hover:bg-primary-dark;
}
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
