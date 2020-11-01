<template>
  <div>
    <ul class="w-full flex justify-center gap-1 text-gray-800">
      <li v-for="i in numberOfPagesForPagination" :key="i">
        <g-link
          class="p-1"
          :class="{ active: currentPage == i }"
          :to="i === 1 ? `/posts` : `/posts/page/${i}`"
          >{{ i }}</g-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["currentPage", "totalNumberOfPages", "perPage"],
  computed: {
    numberOfPagesForPagination() {
      return Math.ceil(this.totalNumberOfPages / this.perPage);
    },
  },
};
</script>

<style lang="postcss" scoped>
.active--exact {
  @apply bg-gray-200 rounded;
}
</style>
