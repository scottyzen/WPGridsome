<template>
  <div class="relative flex flex-col h-full temp-min-hight">
    <header class="sticky inset-x-0 top-0 z-50 bg-white">
      <div class="container flex items-center justify-between">
        <g-link class="font-bold" to="/">{{
          $static.metadata.siteName
        }}</g-link>
        <Nav />
      </div>
    </header>
    <div class="flex-1">
      <slot />
    </div>
    <footer class="font-light text-white">
      <div class="container py-12 ">
        <p class="max-w-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
          quia vero molestias odit blanditiis sunt facilis veniam doloremque
          quas exercitationem architecto numquam, perferendis eligendi cumque
          omnis ipsam.
        </p>
      </div>
      <p class="p-4 text-sm text-center">
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
body {
  background-color: #111c1e;
  z-index: -1;
  max-width: 100vw;
  overflow-x: hidden;
}
.temp-min-hight {
  min-height: 2000px;
}
</style>
