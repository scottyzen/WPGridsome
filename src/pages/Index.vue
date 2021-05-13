<template>
  <Layout>
    <div>
      <div class="relative">
        <GImage
          class="w-full overflow-hidden hero"
          width="1920"
          height="645"
          :src="$static.wordPressPage.featuredMedia.imageDownloaded"
          quality="95"
          fit="cover"
        />

        <div class="absolute top-0 flex items-center w-full h-full">
          <div class="container">
            <div class="w-full max-w-2xl text-white 0 lg:max-w-2xl fade-in-up">
              <h1 class="mb-2 font-semibold">SURFACE MAGIC</h1>
              <h2
                class="max-w-lg mb-4 text-3xl font-bold md:text-4xl xl:text-5xl"
              >
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
        <div
          class="container flex flex-col items-center gap-4 py-12  md:flex-row justify-evenly"
        >
          <div class="flex items-start max-w-xs mb-8 md:m-0">
            <GImage
              width="48"
              height="48"
              class="mr-8 md:mr-4"
              src="../assets/images/clock.svg"
              immediate
            />
            <div>
              <h3 class="font-bold tracking-wide">Save Time</h3>
              <p class="text-sm">
                Lorum ipsum text to go here until final content
              </p>
            </div>
          </div>
          <div class="flex items-start max-w-xs mb-8 md:m-0">
            <GImage
              width="48"
              height="48"
              class="mr-8 md:mr-4"
              src="../assets/images/euro.svg"
              immediate
            />
            <div>
              <h3 class="font-bold tracking-wide">Save Money</h3>
              <p class="text-sm">
                Lorum ipsum text to go here until final content
              </p>
            </div>
          </div>
          <div class="flex items-start max-w-xs">
            <GImage
              width="48"
              height="48"
              class="mr-8 md:mr-4"
              src="../assets/images/env.svg"
              immediate
            />
            <div>
              <h3 class="font-bold tracking-wide">Save The Enviornment</h3>
              <p class="text-sm">
                Lorum ipsum text to go here until final content
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- ABOUT US  -->
      <div class="container grid items-center gap-8 my-12 md:grid-cols-2">
        <div>
          <h3 class="mb-2 text-xl font-bold text-primary">ABOUT US</h3>
          <h4 class="max-w-md mb-8 text-3xl font-semibold text-primary-dark">
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

      <!-- SERVICES -->
      <div class="px-4 py-20 text-center bg-light">
        <h3 class="mb-12 text-3xl font-bold text-primary-dark">Our Services</h3>
        <ServiceCards />
        <g-link to="/services" class="mt-12 button">View All Services</g-link>
      </div>

      <!-- OUR CLIENTS  -->
      <div class="container my-24 text-center">
        <h3 class="mb-12 text-3xl font-bold text-primary-dark">Our Clients</h3>
        <ClientLogos />
      </div>
    </div>

    <!-- GET IN TOUCH  -->
    <div class="container grid items-center gap-8 my-12 mb-32 md:grid-cols-2">
      <div>
        <h3 class="mb-2 text-xl font-bold text-primary">GET IN TOUCH</h3>
        <h4 class="max-w-md mb-8 text-3xl font-semibold text-primary-dark">
          Book Your Professional Property Repairs Today
        </h4>
        <p class="max-w-md mb-8">
          Surface Magic are a trusted & professional company with a great
          reputation to uphold in the trades business. We are vat registered and
          insured. We have experts in all areas of home repairs.
        </p>
        <SmallNav class="flex font-semibold text-primary" />
      </div>
      <ContactForm />
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
  wordPressPage(id: "10"){
    yoastHead
    featuredMedia{
      imageDownloaded
    }
  }
}
</static-query>

<script>
import ServiceCards from "../components/ServiceCards";
import ClientLogos from "../components/ClientLogos";
import SmallNav from "../components/SmallNav";
import ContactForm from "../components/ContactForm";
import { yoastHead } from "../mixins/yoastHead";

export default {
  mixins: [yoastHead],
  created() {
    this.fetchMetaDatas(this.$static.wordPressPage.yoastHead);
  },
  components: {
    ServiceCards,
    ClientLogos,
    SmallNav,
    ContactForm,
  },
};
</script>

<style lang="postcss">
.hero {
  height: 420px;
  object-fit: cover;
}
@media (min-width: 768px) {
  .hero {
    height: 540px;
  }
}
@media (min-width: 960px) {
  .hero {
    height: auto;
  }
}

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
