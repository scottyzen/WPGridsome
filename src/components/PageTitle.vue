<template>
  <header class="bg-primary-dark">
    <div class="container flex items-center h-56 md:h-96">
      <h1 class="text-4xl font-bold text-white md:mb-20">
        {{ pageTitle }}
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    pageTitle: {
      default: "Surface Magic",
      type: String,
    },
  },
};
</script>
