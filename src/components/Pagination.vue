<template>
  <div>
    <ul class="flex justify-center w-full gap-1 text-gray-800">
      <li v-for="i in Math.ceil(pageInfo.total / pageInfo.perPage)" :key="i">
        <g-link
          class="p-1"
          :class="{ active: pageInfo.currentPage == i }"
          :to="i === 1 ? `/posts` : `/posts/page/${i}`"
          >{{ i }}</g-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["pageInfo"],
};
</script>

<style lang="postcss" scoped>
.active--exact {
  @apply bg-gray-200 rounded;
}
</style>
