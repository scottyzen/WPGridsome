<template>
  <div class="w-full md:w-auto">
    <div class="flex items-center justify-end w-full md:justify-between">
      <MobileMenuToggle class="py-4 md:hidden" />
      <ul class="hidden main-menu md:block">
        <g-link class="inline-block py-5 mr-4 md:py-8 md:mr-10" to="/">Home</g-link>
        <g-link class="inline-block py-5 mr-4 md:py-8 md:mr-10" to="/posts">Posts</g-link>
        <a class="inline-block px-3 py-2 text-white bg-indigo-500 rounded md:px-4 hover:bg-indigo-700" href="https://github.com/scottyzen/WPGridsome" target="_blank">
          <span class="flex">Repo
            <g-image width="16" height="16" class="ml-2" src="~/assets/images/github.svg"></g-image>
          </span>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
import MobileMenuToggle from "../components/MobileMenuToggle";

export default {
  components: {
    MobileMenuToggle,
  },
};
</script>

<style lang="postcss">
.main-menu .active--exact,
.main-menu a:hover {
  @apply border-b-2 border-indigo-500;
}
</style>
