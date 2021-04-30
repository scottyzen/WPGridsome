<template>
  <div
    class="pb-12 pt-28 md:pb-16 md:pt-36 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-indigo-800 dark:to-indigo-600"
  >
    <div
      class="container relative z-10 flex flex-col items-center justify-center"
    >
      <h1
        class="flex items-center mb-6 text-4xl font-semibold text-white md:text-6xl"
      >
        {{ title }}
      </h1>
      <p
        v-if="subTitle"
        class="max-w-4xl p-2 text-lg font-light text-gray-100 md:text-lg"
      >
        {{ subTitle }}
      </p>
    </div>
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
      type: String,
    },
  },
};
</script>
