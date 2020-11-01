<template>
  <Layout class="shape">
    <div class="container">
      <div class="flex flex-col items-center justify-center mb-48">
        <h1 class="text-6xl font-bold text-gray-800">Blog</h1>
        <h2 class="text-xl text-gray-700">A WordPress starter for Gridsome</h2>
      </div>
      <ul class="grid gap-16 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="{ node } in $page.posts.edges"
          :key="node.databaseId"
          class="rounded-md shadow bg-white"
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
      <Pagination
        :currentPage="1"
        :totalNumberOfPages="$page.posts.pageInfo.offsetPagination.total"
        :perPage="$page.allSettings.readingSettingsPostsPerPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query{
  allSettings {
    readingSettingsPostsPerPage
  }
  posts {
    pageInfo{
      offsetPagination{
        total
      }
    }
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
            sourceUrl(size: MEDIUM_LARGE)
          }
        }
      }
    }
  }
},
</page-query>

<script>
import Pagination from "../../components/Pagination";
export default {
  components: {
    Pagination,
  },
  data() {
    return {
      perPage: process.env.GRIDSOME_POSTS_PER_PAGE,
    };
  },
};
</script>

<style>
.shape {
  background: url("../../../src/assets/images/shape.svg") no-repeat;
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
