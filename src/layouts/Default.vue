<template>
  <div class="layout">
    <header>
      <div
        class="container flex justify-between bg-indigo-300 my-2 py-4 px-8 rounded-md border-b border-indigo-400"
      >
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
