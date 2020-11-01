<template>
  <div>
    <header class="absolute inset-x-0 top-0 mb-8 border-b">
      <div class="container flex items-center justify-between">
        <g-link class="font-bold" to="/">{{
          $static.metadata.siteName
        }}</g-link>
        <Nav />
      </div>
    </header>
    <div class="min-h-screen pt-32 pb-12">
      <slot />
    </div>
    <footer class="font-light text-white bg-gray-800">
      <p class="p-4 text-sm text-center bg-gray-800">
        © 2020 WPGrdisome.com by
        <a
          href="https://scottyzen.com?ref=wpgridsome"
          target="_blank"
          rel="noopener"
          class="text-yellow-500"
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
