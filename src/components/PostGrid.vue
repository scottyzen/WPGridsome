<template>
  <div class="grid grid-cols-1 gap-8 py-12 xl:gap-16 md:grid-cols-2 lg:grid-cols-3">
    <Card v-for="{ node } in posts" :key="node.databaseId" :node="node" />
  </div>
</template>

<script>
import Card from "./Card";
export default {
  props: ["posts"],
  components: {
    Card,
  },
};
</script>