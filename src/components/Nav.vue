<template>
  <div class="w-full md:w-auto">
    <div class="flex items-center justify-between w-full">
      <ul class="main-menu">
        <DarkModeToggle />
        <g-link class="inline-block py-8 mr-10" to="/">Home</g-link>
        <g-link class="inline-block py-8 mr-10" to="/posts">Posts</g-link>
      </ul>
      <a class="flex px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-700" href="https://github.com/scottyzen/WPGridsome" target="_blank">Repo
        <g-image width="16" height="16" class="ml-2" src="~/assets/images/github.svg"></g-image>
      </a>
    </div>
  </div>
</template>

<script>
import DarkModeToggle from "../components/DarkModeToggle";
export default {
  components: {
    DarkModeToggle,
  },
};
</script>

<style lang="postcss">
.main-menu .active--exact,
.main-menu a:hover {
  @apply border-b-2 border-indigo-500;
}
</style>
