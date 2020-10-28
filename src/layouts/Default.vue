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
      <g-image
        src="~/assets/images/jesse-gardner-45qGrlP-aBY-unsplash.jpg"
        class="hero-image"
        :style="{ transform: `scale(clamp(1, ${scroolpos + 1}, 1.1))` }"
      ></g-image>
      <slot />
    </div>
    <footer class="font-light text-white pt-24">
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
  data() {
    return {
      scroolpos: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      if (window.scrollY < 500) this.scroolpos = window.scrollY * 0.0005;
    },
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
.hero-image {
  z-index: -1;
  position: absolute;
  width: 100%;
  transform-origin: top;
}
</style>
