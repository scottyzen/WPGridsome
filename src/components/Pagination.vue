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
      return Math.ceil(
        this.$static.posts.pageInfo.offsetPagination.total / this.perPage
      );
    },
  },
};
</script>

<style lang="postcss" scoped>
.active {
  @apply bg-gray-200 rounded;
}
</style>
