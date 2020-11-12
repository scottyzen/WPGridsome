<template>
  <ul>
    <li
      v-for="{ node } in this.$static.menu.menuItems.edges"
      :key="node.id"
      class="mb-1"
    >
      <g-link :to="node.path">{{ node.label }}</g-link>
    </li>
  </ul>
</template>

<static-query>
{
  menu(id: "Menu 1", idType: NAME) {
    menuItems {
      edges{
        node {
        url
        path
        label
        id
      }
      }
    }
  }
}

</static-query>