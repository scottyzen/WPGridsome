<template>
  <div class="py-12 md:py-16 bg-gradient-to-r from-gray-900 to-gray-700">
    <div
      class="container relative z-10 flex flex-col items-center justify-center"
    >
      <h1
        class="flex items-center mb-6 text-4xl font-semibold text-white md:text-5xl"
      >
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "Surface Magic",
      type: String,
    },
  },
};
</script>
