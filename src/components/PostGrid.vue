<template>
  <div
    class="grid grid-cols-1 gap-8 pb-12 xl:gap-16 md:grid-cols-2 lg:grid-cols-3"
  >
    <Card v-for="{ node } in posts" :key="node.id" :node="node" />
  </div>
</template>

<script>
export default {
  props: ['posts'],
  components: {
    Card: () => import('../components/Card'),
  },
}
</script>
