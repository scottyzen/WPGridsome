<template>
  <div
    class="flex flex-col items-center justify-center mt-12 mb-48 text-center"
  >
    <h1 class="text-4xl font-bold md:text-6xl">{{ title }}</h1>
    <h2 class="text-xl text-gray-700">{{ subTitle }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "WPGridsome",
      type: String,
    },
    subTitle: {
      default: "A starter for Gridsome using WordPress + WPGraphQL",
      type: String,
    },
  },
};
</script>

<style>
</style>