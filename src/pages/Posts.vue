<template>
  <Layout class="shape">
    <div class="container">
      <div class="grid mb-12 md:grid-cols-2">
        <div class="order-2 py-12 pr-12 md:order-1">
          <div class="mb-2 text-indigo-500">
            {{ $page.posts.edges[0].node.categories.edges[0].node.name }}
          </div>
          <h2
            class="mb-4 text-4xl font-bold leading-none text-gray-800"
            v-html="$page.posts.edges[0].node.title"
          ></h2>
          <p
            class="max-w-lg mb-8 leading-normal text-justify text-gray-600"
            v-html="$page.posts.edges[0].node.excerpt"
          ></p>
          <g-link
            :to="`/post/${$page.posts.edges[0].node.slug}`"
            class="px-8 py-3 text-white bg-indigo-600 rounded button hover:bg-white hover:bg-indigo-500"
            >Read More</g-link
          >
        </div>
        <div class="order-1 ">
          <g-image
            v-if="$page.posts.edges[0].node.featuredImage"
            :src="$page.posts.edges[0].node.featuredImage.node.sourceUrl"
            class="object-cover w-full rounded-lg shadow-lg"
          ></g-image>
          <g-image
            v-else
            src="~/assets/images/no-img-found.jpg"
            class="object-cover w-full rounded-lg shadow-lg"
          ></g-image>
        </div>
      </div>

      <ul class="grid gap-16 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="{ node } in $page.posts.edges.slice(1, currentPossition)"
          :key="node.databaseId"
          class="rounded-md shadow-lg"
        >
          <a :href="`/post/${node.slug}`">
            <g-image
              v-if="node.featuredImage"
              :src="node.featuredImage.node.sourceUrl"
              class="object-cover w-full h-200 rounded-t-md"
            ></g-image>
            <g-image
              v-else
              src="~/assets/images/no-img-found.jpg"
              class="object-cover w-full h-200 rounded-t-md"
            ></g-image>

            <div class="px-4 py-2 pb-8">
              <span
                v-if="node.categories.edges[0]"
                class="text-sm text-indigo-500"
                v-html="node.categories.edges[0].node.name"
              ></span>
              <h2 class="text-gray-800">{{ node.title }}</h2>
            </div>
          </a>
        </li>
      </ul>
      <div class="text-center">
        <button
          v-if="$page.posts.edges.length >= currentPossition"
          class="px-6 py-2 m-auto text-white bg-indigo-600 rounded button hover:bg-white hover:bg-indigo-500"
          @click="showMore()"
        >
          Load more
        </button>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts(first: 999) {
    edges {
      node {
        title
        slug
        id
        databaseId
        categories {
          edges {
            node {
              name
            }
          }
        }
        excerpt(format: RENDERED)
        featuredImage {
          node {
            sourceUrl(size: MEDIUM)
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      currentPossition: 7,
      postToLoad: 12,
    };
  },
  methods: {
    showMore() {
      this.currentPossition = this.currentPossition + this.postToLoad;
    },
  },
};
</script>

<style>
.shape {
  background: url("../../src/assets/images/shape.svg") no-repeat;
  background-size: auto 400px;
  min-height: 600px;
}
@media (min-width: 768px) {
  .shape {
    background-size: contain;
  }
}
.h-200 {
  height: 200px;
}
.read-more {
  display: none;
}
.button {
  transition: all 200ms ease-out, background-color 100ms ease-out;
  display: inline-block;
}
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px -2px rgba(0, 0, 0, 0.25);
}
.button:active {
  transform: translateY(-1px);
  box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.25);
}
</style>
