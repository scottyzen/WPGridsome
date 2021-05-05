<template>
  <header class="p-4 mx-auto bg-white">
    <div class="flex items-center justify-between">
      <g-link class="font-bold" to="/"
        ><g-image src="~/assets/images/logo.png"></g-image
      ></g-link>
      <div>
        <SmallNav />
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
header {
  max-width: 1420px;
}
</style>
