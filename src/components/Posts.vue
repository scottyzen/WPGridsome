<template>
  <ul class="grid gap-16 py-12 md:grid-cols-2 lg:grid-cols-3">
    <li v-for="{ node } in posts" :key="node.databaseId">
      <Card :node="node" />
    </li>
  </ul>
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