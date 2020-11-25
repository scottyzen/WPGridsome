<template>
  <div class="w-full md:w-auto">
    <div class="flex items-center justify-end w-full md:justify-between">
      <DarkModeToggle />
      <div class="py-4 md:hidden" @click="hideMobileMenu = !hideMobileMenu">
        <MobileMenuToggle />
      </div>
      <ul class="main-menu " :class="{'hide-mobile-menu': hideMobileMenu}">
        <g-link class="inline-block py-2 md:py-8 md:mr-10" to="/">Home</g-link>
        <g-link class="inline-block py-2 md:py-8 md:mr-10" to="/posts">Posts</g-link>
        <a class="inline-block w-full px-3 py-2 text-white bg-indigo-500 rounded md:w-auto md:px-4 hover:bg-indigo-700" href="https://github.com/scottyzen/WPGridsome" target="_blank">
          <span class="flex justify-center">Repo
            <g-image width="16" height="16" class="ml-2" src="~/assets/images/github.svg"></g-image>
          </span>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
import MobileMenuToggle from "../components/MobileMenuToggle";
import DarkModeToggle from "../components/DarkModeToggle";

export default {
  data() {
    return {
      hideMobileMenu: true,
    };
  },
  components: {
    MobileMenuToggle,
    DarkModeToggle,
  },
};
</script>

<style lang="postcss">
.main-menu .active--exact,
.main-menu a:hover {
  @apply md:border-b-2 border-indigo-500;
}
@media (max-width: 768px) {
  .main-menu {
    @apply shadow-lg absolute left-0 right-0 top-20 p-8 mx-auto gap-4 bg-white rounded w-11/12 flex flex-col items-center transition-all duration-300;
  }
  .dark .main-menu {
    @apply bg-gray-700;
  }
  .hide-mobile-menu {
    @apply transform -translate-y-96;
  }
}
</style>
