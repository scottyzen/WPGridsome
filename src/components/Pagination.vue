<template>
  <div>
    <h1>Current page: {{ currentPage }}</h1>
    <ul class="w-full flex justify-center gap-1">
      <li class="p-1" v-for="i in numberOfPagesForPagination" :key="i">
        <g-link :class="{ active: currentPage == i }" v-if="i === 1" to="/posts"
          >1</g-link
        >
        <g-link
          :class="{ active: currentPage == i }"
          v-else
          :to="`/posts/page/${i}`"
          >{{ i }}</g-link
        >
      </li>
    </ul>
  </div>
</template>

<static-query>
query {
      posts{
          pageInfo{
              offsetPagination{
                  total
              }
          }
      }
    }
</static-query>

<script>
export default {
  data() {
    return {
      perPage: process.env.GRIDSOME_POSTS_PER_PAGE,
    };
  },
  props: {
    currentPage: {
      default: 1,
      type: Number,
    },
  },
  computed: {
    numberOfPagesForPagination() {
      return (
        Math.round(
          this.$static.posts.pageInfo.offsetPagination.total / this.perPage
        ) - 1
      );
    },
  },
};
</script>

<style lang="postcss" scoped>
.active {
  @apply bg-red-500;
}
</style>
