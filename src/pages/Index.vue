<template>
  <Layout>
    <div>
      <div class="relative">
        <HeroImage />

        <div class="absolute top-0 flex items-center w-full h-full">
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

      <div class="text-white bg-primary block-bg">
        <div class="container flex gap-4 py-12 justify-evenly">
          <div class="flex items-start max-w-xs">
            <GImage class="mr-4" src="~/assets/images/clock.svg" />
            <div>
              <h3 class="font-bold tracking-wide">Save Time</h3>
              <p class="text-sm">
                Lorum ipsum text to go here until final content
              </p>
            </div>
          </div>
          <div class="flex items-start max-w-xs">
            <GImage class="mr-4" src="~/assets/images/euro.svg" />
            <div>
              <h3 class="font-bold tracking-wide">Save Money</h3>
              <p class="text-sm">
                Lorum ipsum text to go here until final content
              </p>
            </div>
          </div>
          <div class="flex items-start max-w-xs">
            <GImage class="mr-4" src="~/assets/images/env.svg" />
            <div>
              <h3 class="font-bold tracking-wide">Save The Enviornment</h3>
              <p class="text-sm">
                Lorum ipsum text to go here until final content
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container grid items-center gap-8 my-12 md:grid-cols-2">
        <div>
          <h3 class="mb-2 text-xl font-bold text-primary">ABOUT US</h3>
          <h4 class="max-w-md mb-8 text-3xl text-primary-dark">
            Surface Magic Are Experts In Surface Repair
          </h4>
          <p class="max-w-md mb-8">
            Surface Magic are Ireland’s No.1 surface repair company. Our
            specialist technicians have the ability to repair many types of
            surfaces, carefully re-creating pattern, colour, shape and finish,
            helping clients save on time, cost of replacements and stops waste
            that will end up in landfill.
          </p>
          <g-link to="/about-us" class="button">Find Out More</g-link>
        </div>
        <g-image src="~/assets/images/about.jpg"></g-image>
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
.block-bg {
  background: url("../assets/images/block-bg.jpg");
}
.fade-in-up {
  animation: fade-in-up 600ms ease-in 600ms forwards;
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
