<template>
  <div>
    <header class="absolute inset-x-0 top-0 mb-8 border-b">
      <div class="container flex items-center justify-between ">
        <g-link class="hidden md:block font-bold flex-1" to="/">{{
          $static.metadata.siteName
        }}</g-link>
        <Nav />
      </div>
    </header>
    <div class="min-h-screen pt-32 pb-12">
      <slot />
    </div>
    <footer class="py-4 text-gray-800 bg-gray-200">
      <p class="p-4 text-sm text-center">
        © 2020 WPGridsome.com by
        <a
          href="https://scottyzen.com?ref=wpgridsome"
          target="_blank"
          rel="noopener"
          class="text-indigo-600"
          >Scott Kennedy</a
        >
      </p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Nav from "../components/Nav";
export default {
  components: {
    Nav,
  },
};
</script>

<style>
a,
button {
  cursor: pointer;
  outline: none !important;
}
</style>
