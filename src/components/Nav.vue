<template>
  <div class="w-full md:w-auto">
    <div class="flex items-center justify-end w-full md:justify-between">
      <DarkModeToggle />
      <div class="py-4 md:hidden">
        <MobileMenuToggle @click.native="menuIsOpen = !menuIsOpen" :menuIsOpen="menuIsOpen" />
      </div>
      <div class="main-menu " :class="{'hide-mobile-menu': !menuIsOpen}">
        <g-link class="inline-block py-2 md:py-6 md:mr-8" to="/">Home</g-link>
        <g-link class="inline-block py-2 md:py-6 md:mr-8" to="/all-products">Shop</g-link>
        <g-link class="inline-block py-2 md:py-6 md:mr-8" to="/posts">Posts</g-link>
        <g-link class="inline-block py-2 md:py-6 md:mr-8" to="/contact">Contact</g-link>
        <a class="inline-block px-3 py-2 text-white bg-indigo-500 rounded md:w-auto md:px-4 hover:bg-indigo-700" href="https://github.com/scottyzen/WPGridsome" target="_blank" rel="noopener noreferrer">
          <span class="flex items-center justify-center">Repo <svg fill="none" class="inline ml-2" height="16" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="m9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0 -.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0 -1.5-3.75 5.07 5.07 0 0 0 -.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 0 0 -7 0c-2.73-1.83-3.91-1.48-3.91-1.48a5.07 5.07 0 0 0 -.09 3.77 5.44 5.44 0 0 0 -1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0 -.94 2.58v3.87" />
            </svg></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import MobileMenuToggle from "../components/MobileMenuToggle";
import DarkModeToggle from "../components/DarkModeToggle";

export default {
  data() {
    return {
      menuIsOpen: false,
    };
  },
  components: {
    MobileMenuToggle,
    DarkModeToggle,
  },
};
</script>

<style lang="postcss">
.main-menu a {
  @apply md:border-b-2 border-transparent;
}
.main-menu .active--exact,
.main-menu a:hover {
  @apply md:border-b-2 border-indigo-500;
}
@media (max-width: 768px) {
  .main-menu {
    @apply shadow-lg absolute left-0 right-0 top-20 p-8 mx-auto gap-4 bg-white rounded w-11/12 flex flex-col items-center transition-transform duration-300 text-sm;
    will-change: transform;
  }
  .dark .main-menu {
    @apply bg-gray-700;
  }
  .hide-mobile-menu {
    transform: translateY(-100vh);
  }
}
</style>
