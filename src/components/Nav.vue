<template>
  <div class="w-full">
    <div class="flex items-center justify-end w-full md:justify-between">
      <nav
        class="flex items-center justify-end w-full text-sm uppercase  main-menu gap-x-4 lg:gap-x-12 text-primary-dark lg:text-base"
        :class="{ 'hide-mobile-menu': !menuIsOpen }"
      >
        <span class="relative parent" v-for="{ node } in menu" :key="node.key">
          <g-link class="inline-block" :to="`${node.path}`">{{
            node.label
          }}</g-link>
          <ul v-if="node.childItems.edges.length" class="sub-menu">
            <li v-for="sub in node.childItems.edges" :key="sub.node.id">
              <g-link
                class="text-base whitespace-nowrap"
                :to="`${sub.node.path}`"
                >{{ sub.node.label }}</g-link
              >
            </li>
          </ul>
        </span>
        <!-- <g-link class="inline-block" to="/">Home</g-link> -->
        <g-link class="button" to="/contact">Contact us</g-link>
      </nav>
      <div class="py-4 md:hidden">
        <MobileMenuToggle
          class="ml-4"
          @click.native="menuIsOpen = !menuIsOpen"
          :menuIsOpen="menuIsOpen"
        />
      </div>
    </div>
  </div>
</template>

<static-query>
query MainMenu {
  menu(id: "2", idType: DATABASE_ID) {
    menuItems(first: 99) {
      edges{
        node {
        label
        path
        id
        parentDatabaseId
        childItems {
          edges{
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
}

</static-query>

<script>
import MobileMenuToggle from "../components/MobileMenuToggle";
import WPMenu from "../components/WPMenu";
export default {
  data() {
    return {
      menuIsOpen: false,
    };
  },
  components: {
    MobileMenuToggle,
    WPMenu,
  },
  computed: {
    menu() {
      return this.$static.menu.menuItems.edges.filter((item) => {
        return item.node.parentDatabaseId == 0;
      });
    },
  },
};
</script>

<style lang="postcss">
.main-menu a {
  @apply font-semibold;
}
.main-menu .active--exact,
.main-menu a:hover {
  @apply text-primary;
}
@media (max-width: 768px) {
  .main-menu {
    @apply mx-auto absolute left-0 top-0 z-20 mt-24 p-8 bg-white rounded w-full flex flex-col items-center transition-all duration-500;
    will-change: transform, opacity;
  }
  .main-menu a {
    @apply mb-4;
  }
  .hide-mobile-menu {
    transform: translateY(-100vh);
    opacity: 0;
  }
}

.sub-menu {
  @apply shadow-lg flex flex-col absolute bg-white p-8 opacity-0;
  max-height: 0;
  transform: scaleY(0);
  transform-origin: top;
  gap: 0.5rem;
}
.parent:hover .sub-menu {
  @apply opacity-100;
  max-height: 1000px;
  transform: scaleY(1);
  transition: opacity 200ms ease 100ms, transform 200ms ease 100ms;
}
</style>
