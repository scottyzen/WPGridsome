<template>
  <div>
    <ul v-for="{ node } in getNavItems" :key="node.id">
      <li v-for="{ node } in node.menuItems.edges" :key="node.id">
        <g-link :to="node.path">{{ node.label }}</g-link>
      </li>
    </ul>
  </div>
</template>

<static-query>
query{
  menus {
    edges {
      node {
        slug
        id
        menuItems {
          edges {
            node {
              label
              path
              id
            }
          }
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  props: ["slug"],
  computed: {
    getNavItems() {
      return this.$static.menus.edges.filter((edge) => {
        return edge.node.slug == this.slug;
      });
    },
  },
};
</script>
