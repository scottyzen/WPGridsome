<template>
  <div class="w-full">
    <div class="flex items-center justify-end w-full md:justify-between">
      <div
        class="flex items-center justify-end w-full text-sm uppercase main-menu gap-x-4 lg:gap-x-12 text-primary-dark lg:text-base"
        :class="{ 'hide-mobile-menu': !menuIsOpen }"
      >
        <g-link class="inline-block" to="/">Home</g-link>
        <g-link class="inline-block" to="/about-us">About Us</g-link>
        <g-link class="inline-block" to="/services">Services</g-link>
        <g-link class="inline-block" to="/sectors">Sectors</g-link>
        <g-link class="inline-block" to="/gallery">Gallery</g-link>
        <g-link class="inline-block" to="/news">News</g-link>
        <g-link class="button" to="/contact">Contact us</g-link>
      </div>
      <div class="py-4 md:hidden">
        <MobileMenuToggle
          class="ml-4"
          @click.native="menuIsOpen = !menuIsOpen"
          :menuIsOpen="menuIsOpen"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MobileMenuToggle from "../components/MobileMenuToggle";
export default {
  data() {
    return {
      menuIsOpen: false,
    };
  },
  components: {
    MobileMenuToggle,
  },
};
</script>

<style lang="postcss">
.main-menu a {
  @apply font-semibold;
}
.main-menu .active--exact,
.main-menu a:hover {
  @apply text-primary;
}
@media (max-width: 768px) {
  .main-menu {
    @apply mx-auto absolute left-0 top-0 z-20 mt-24 p-8 bg-white rounded w-full flex flex-col items-center transition-all duration-500;
    will-change: transform, opacity;
  }
  .main-menu a {
    @apply mb-4;
  }
  .hide-mobile-menu {
    transform: translateY(-100vh);
    opacity: 0;
  }
}
</style>
