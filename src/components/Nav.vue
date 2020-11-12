<template>
  <div class="w-full md:w-auto">
    <div class="flex items-center justify-between w-full">
      <ul class="main-menu">
        <g-link class="inline-block py-8 mr-10" to="/">Home</g-link>
        <div class="inline-block py-8 mr-10 has-sub-menu">
          <span>Pages</span>
          <div
            class="p-4 mt-2 bg-white border-b border-indigo-400 rounded shadow-lg sub-menu"
          >
            <Menu />
          </div>
        </div>
        <g-link class="inline-block py-8 mr-10" to="/posts">Posts</g-link>
        <!-- <g-link class="inline-block py-8 mr-10" to="/mail">Mail</g-link> -->
      </ul>
      <a
        class="flex px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
        href="https://github.com/scottyzen/WPGridsome"
        target="_blank"
        >Repo
        <g-image
          width="16"
          height="16"
          class="ml-2"
          src="~/assets/images/github.svg"
        ></g-image
      ></a>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu";
export default {
  components: {
    Menu,
  },
};
</script>

<style lang="postcss">
.main-menu .active--exact,
.main-menu a:hover {
  @apply border-b-2 border-indigo-500;
}
.sub-menu {
  display: none;
  position: absolute;
  transform: translateX(-25%);
}
.sub-menu li {
  min-width: 180px;
}
.has-sub-menu:hover .sub-menu {
  display: block;
}
</style>
