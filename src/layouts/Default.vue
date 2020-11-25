<template>
  <div class="text-gray-800 dark:bg-gray-700 dark:text-white">
    <header class="absolute inset-x-0 top-0 mb-8 border-b dark:border-gray-700">
      <div class="container flex items-center justify-between">
        <g-link class="font-bold" to="/">{{$static.metadata.siteName}}</g-link>
        <Nav />
      </div>
    </header>
    <section class="min-h-screen pt-32 pb-12">
      <slot />
    </section>
    <Footer />
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
import Footer from "../components/Footer";
export default {
  components: {
    Nav,
    Footer,
  },
};
</script>

<style lang="postcss">
a,
button {
  cursor: pointer;
  outline: none !important;
}
* {
  transition: background 600ms ease, border 600ms ease;
}
.shape {
  background-image: url("../../src/assets/images/shape.svg");
  background-repeat: no-repeat;
  background-size: auto 400px;
  min-height: 600px;
}
.dark .shape {
  background-image: url("../../src/assets/images/shape-dark.svg") !important;
}
@media (min-width: 768px) {
  .shape {
    background-size: contain;
  }
}
</style>
