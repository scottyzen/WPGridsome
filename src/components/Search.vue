<template>
  <div
    class="flex items-center px-3 py-1 bg-gray-100 border rounded-lg md:mx-auto glass-border-color dark:bg-gray-800 dark:text-white"
  >
    <!-- Hidedn label  -->
    <label for="search" class="ax-hidden">Search</label>

    <!-- <Search /> -->
    <VueFuse
      v-if="renderComponent"
      :fuse-opts="options"
      :defaultAll="false"
      :list="this.$static.allWordPressPost.edges"
      :search="search"
      placeholder="Search"
      id="search"
      class="w-24 p-1 mr-2 text-lg bg-transparent rounded-none outline-none appearance-none md:text-sm sm:w-32 md:w-56"
      @fuse-results="handleResults"
    />

    <!-- Results  -->
    <div
      v-if="results.length"
      class="fixed left-0 w-full max-w-md overflow-hidden bg-white border rounded shadow-xl dark:border-gray-900 dark:bg-gray-800 top-16 md:right-8 sm:left-auto"
    >
      <transition-group
        class="overflow-y-scroll divide-y divide-gray-100 dark:divide-gray-900 overscroll-contain max-h-400"
        name="list"
        tag="ul"
        mode="in-out"
      >
        <li v-for="{ item } in results" :key="item">
          <div @click="closeSearch">
            <g-link
              class="flex items-center justify-between px-8 py-2 md:p-3 hover:bg-gray-50 dark:hover:bg-gray-900"
              :to="item.node.path"
            >
              <div class="flex-1 md:pl-2">
                <div>{{ item.node.title }}</div>
              </div>
              <g-image
                v-if="item.node.featuredMedia"
                class="w-12 rounded-sm md:w-16"
                :src="item.node.featuredMedia.downloaded"
              />
            </g-link>
          </div>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<static-query>
query Home {
  allWordPressPost(limit: 48) {
    edges {
      node {
        title
        path
        featuredMedia {
          downloaded
        }
      }
    }
  }
}
</static-query>

<script>
import VueFuse from "./VeuFuse";

export default {
  data() {
    return {
      search: "",
      results: [],
      renderComponent: true,
    };
  },
  components: {
    VueFuse,
  },
  computed: {
    options() {
      return {
        keys: ["node.title"],
      };
    },
  },
  methods: {
    handleResults(r) {
      this.results = r;
    },
    closeSearch(e) {
      // console.log(e);
      this.search = "";
      this.results = [];
      this.forceRerender();
    },
    forceRerender() {
      // Remove my-component from the DOM
      this.renderComponent = false;

      this.$nextTick(() => {
        // Add the component back in
        this.renderComponent = true;
      });
    },
  },
};
</script>

<style>
.ax-hidden {
  position: absolute;
  height: 1px;
  width: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  border: 0;
  overflow: hidden;
  position: absolute;
  top: -1000px;
  left: -1000px;
}
button:focus {
  outline: 0;
}

.badge:before {
  content: attr(count);
  position: absolute;
  right: -8px;
  top: -6px;
  background: tomato;
  border-radius: 10px;
  color: #fff;
  font-size: 11px;
  min-width: 1.125rem;
  min-height: 1.125rem;
  padding: 0.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.125;
  font-variant-numeric: tabular-nums;
}

.pop:before {
  animation: pop 250ms ease-in-out;
}

.max-h-400 {
  max-height: 500px;
}

@keyframes pop {
  0% {
    transform: scale(0.75);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.list-move {
  transition: all 300ms ease-in-out 100ms;
}
.list-leave-active {
  transition: all 300ms ease-in;
  max-height: 500px;
}
.list-enter-active {
  transition: all 300ms ease-out;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(4px);
  max-height: 0;
}
</style>
