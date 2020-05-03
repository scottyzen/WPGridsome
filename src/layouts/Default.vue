<template>
  <div>
    <header class="border-b mb-8 absolute inset-x-0 top-0">
      <div class="container flex justify-between items-center">
        <g-link class="font-bold" to="/">{{
          $static.metadata.siteName
        }}</g-link>
        <Nav />
      </div>
    </header>
    <slot />
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
}
</style>
