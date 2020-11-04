<template>
  <div class="w-full md:w-auto">
    <div class="flex items-center justify-between w-full">
      <ul class="main-menu">
        <g-link class="inline-block py-8 mr-10" to="/">Home</g-link>
        <g-link class="inline-block py-8 mr-10" to="/posts">Posts</g-link>
        <!-- <g-link class="inline-block py-8 mr-10" to="/mail">Mail</g-link> -->
      </ul>
      <a
        class="py-2 px-4 flex bg-indigo-600 hover:bg-indigo-700 rounded text-white"
        href="https://github.com/scottyzen/WPGridsome"
        target="_blank"
        >Repo <g-image class="ml-2" src="~/assets/images/github.svg"></g-image
      ></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.main-menu .active--exact,
.main-menu a:hover {
  @apply border-b-2 border-indigo-500;
}
</style>
