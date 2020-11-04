<template>
  <Layout class="shape">
    <div class="container">
      <div class="flex flex-col items-center justify-center mb-48">
        <h1 class="text-6xl font-bold text-gray-800">Blog</h1>
        <h2 class="text-xl text-gray-700">A WordPress starter for Gridsome</h2>
      </div>
      <ul class="grid gap-16 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="{ node } in $page.posts.edges" :key="node.databaseId">
          <Card :node="node" />
        </li>
      </ul>
      <ClientOnly>
        <Pagination
          :currentPage="$context.currentPage"
          :totalNumberOfPages="$context.total"
          :perPage="$page.allSettings.readingSettingsPostsPerPage"
        />
      </ClientOnly>
    </div>
  </Layout>
</template>

<page-query>
query ($offset: Int, $perPage: Int) {
  allSettings {
    readingSettingsPostsPerPage
  }
  posts(where: {offsetPagination: {offset: $offset, size: $perPage}}) {
    edges {
      node {
        title
        slug
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
}
</page-query>

<script>
import Pagination from "../../../components/Pagination";
import Card from "../../../components/Card";

export default {
  components: {
    Pagination,
    Card,
  },
};
</script>
