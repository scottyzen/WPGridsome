<template>
  <header class="bg-primary-dark">
    <div class="container flex items-center h-96">
      <h1 class="mb-20 text-4xl font-bold text-white">
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
