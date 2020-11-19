<template>
  <g-link v-if="node" :to="`/post/${node.slug}`" class="block bg-white border-b border-gray-400 rounded-md shadow-lg">
    <g-image v-if="node.featuredImage" :src="node.featuredImage.node.sourceUrl" class="object-cover w-full h-200 rounded-t-md"></g-image>
    <g-image v-else src="~/assets/images/no-img-found.jpg" class="object-cover w-full h-200 rounded-t-md"></g-image>

    <div class="flex flex-col p-4">
      <h2 class="mb-2 overflow-scroll leading-tight whitespace-no-wrap hide-scrollbar">{{ node.title }}</h2>
      <p class="flex-1 mb-3 text-sm leading-tight text-gray-600" v-html="node.excerpt.slice(0, 130) + '...'"></p>
      <div class="flex w-full gap-2 mt-6 overflow-scroll whitespace-no-wrap hide-scrollbar">
        <span v-for="{ node } in node.categories.edges.slice(0, 3)" :key="node">
          <g-link class="p-1 px-3 text-xs text-indigo-700 bg-indigo-100 rounded-full" :to="`/posts/${node.slug}`">{{ node.name }}</g-link>
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