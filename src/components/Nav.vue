<template>
  <div class="w-full">
    <div class="flex items-center justify-end w-full md:justify-between">
      <div
        class="flex items-center justify-end w-full uppercase main-menu gap-x-12 text-primary-dark"
        :class="{ 'hide-mobile-menu': !menuIsOpen }"
      >
        <g-link class="inline-block" to="/">Home</g-link>
        <g-link class="inline-block" to="/about-us">About Us</g-link>
        <g-link class="inline-block" to="/services">Services</g-link>
        <g-link class="inline-block" to="/sectors">Sectors</g-link>
        <g-link class="inline-block" to="/gallery">Gallery</g-link>
        <g-link class="inline-block" to="/posts">News</g-link>
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
    @apply mx-auto absolute  gap-4 bg-white rounded w-full flex flex-col items-center transition-all duration-300;
    will-change: transform, opacity z-20;
  }
  .hide-mobile-menu {
    transform: translateY(-100vh);
    opacity: 0;
  }
}
</style>
