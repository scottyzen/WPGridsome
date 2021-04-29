<template>
  <div class="w-full md:w-auto">
    <div class="flex items-center justify-end w-full md:justify-between">
      <div class="flex main-menu" :class="{ 'hide-mobile-menu': !menuIsOpen }">
        <DarkModeToggle class="order-1 py-4 md:order-none md:ml-8" />
        <g-link class="inline-block py-4 md:text-sm md:py-6 md:ml-8" to="/posts"
          >Posts</g-link
        >
        <g-link
          class="inline-block py-4 md:text-sm md:py-6 md:ml-8"
          to="/gettng-started"
          >Getting Started</g-link
        >
        <g-link
          class="inline-block py-4 md:text-sm md:py-6 md:ml-8"
          to="/contact"
          >Contact</g-link
        >
      </div>
      <Search class="inline md:ml-12" />
      <div class="py-4 md:hidden">
        <MobileMenuToggle
          class="ml-4"
          @click.native="menuIsOpen = !menuIsOpen"
          :menuIsOpen="menuIsOpen"
        />
      </div>
      <!-- <UserAvatar /> -->
    </div>
  </div>
</template>

<script>
import MobileMenuToggle from '../components/MobileMenuToggle'
import DarkModeToggle from '../components/DarkModeToggle'
import Search from '../components/Search'

export default {
  data() {
    return {
      menuIsOpen: false,
    }
  },
  components: {
    MobileMenuToggle,
    DarkModeToggle,
    Search,
    // UserAvatar,
  },
}
</script>

<style lang="postcss">
.main-menu a {
  @apply md:border-b-2 border-transparent font-semibold;
}
.main-menu .active--exact,
.main-menu a:hover {
  @apply md:border-b-2 border-indigo-500;
}
@media (max-width: 768px) {
  .main-menu {
    @apply shadow-lg absolute left-0 right-0 top-20 p-8 mx-auto gap-4 bg-white rounded w-11/12 flex flex-col items-center transition-all duration-300;
    will-change: transform, opacity;
  }
  .dark .main-menu {
    @apply bg-gray-700;
  }
  .hide-mobile-menu {
    transform: translateY(-100vh);
    opacity: 0;
  }
}
</style>
