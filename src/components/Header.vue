<template>
  <header class="px-6 py-4 md:p-4">
    <div class="flex items-center justify-between mx-auto">
      <g-link to="/"
        ><g-image
          class="w-28 md:w-auto"
          src="~/assets/images/logo.png"
          immediate
        ></g-image
      ></g-link>
      <div class="flex flex-wrap justify-end">
        <SmallNav class="hidden md:flex text-primary" />
        <Nav />
      </div>
    </div>
  </header>
</template>

<script>
import Nav from "../components/Nav";
import SmallNav from "../components/SmallNav";
export default {
  components: {
    Nav,
    SmallNav,
  },
};
</script>

<style scoped>
header > div {
  max-width: 1420px;
}
</style>
