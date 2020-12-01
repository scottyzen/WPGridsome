<template>
  <g-link :to="`/post/${node.slug}`" class="block bg-white border-b border-gray-300 rounded-md shadow-lg dark:border-gray-900 dark:bg-gray-800">
    <g-image v-if="node.featuredImage" :src="node.featuredImage.node.sourceUrl" class="object-cover w-full h-200 rounded-t-md"></g-image>
    <g-image v-else src="~/assets/images/no-img-found.jpg" class="object-cover w-full h-200 rounded-t-md"></g-image>
    <div class="flex flex-col p-4">
      <h2 class="mb-2 overflow-scroll leading-tight whitespace-nowrap hide-scrollbar">{{ node.title }}</h2>
      <p class="flex-1 mb-3 text-sm font-light leading-tight text-gray-500 dark:text-gray-300" v-html="node.excerpt.slice(0, 130) + '...'"></p>
      <div class="flex w-full gap-2 mt-6 overflow-scroll whitespace-nowrap hide-scrollbar">
        <span v-for="{ node } in node.categories.edges.slice(0, 3)" :key="node.id">
          <g-link class="inline-block p-1 px-3 text-xs text-indigo-700 rounded-full bg-indigo-50 dark:bg-indigo-500 dark:text-indigo-100" :to="`/posts/${node.slug}`">{{ node.name }}</g-link>
        </span>
      </div>
    </div>
  </g-link>
</template>

<script>
export default {
  props: ["node"],
};
</script>

<style>
.hide-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
  background: transparent; /* make scrollbar transparent */
}
.h-200 {
  height: 200px;
}
</style>