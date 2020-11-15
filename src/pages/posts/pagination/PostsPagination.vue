<template>
  <Layout class="shape">
    <div class="container">
      <div class="flex flex-col items-center justify-center mb-48">
        <h1 class="text-6xl font-bold text-gray-800">Blog</h1>
        <h2 class="text-xl text-gray-700">A WordPress starter for Gridsome</h2>
      </div>
      <Posts :posts="$page.posts.edges" />
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
import Posts from "../../../components/Posts";
import Pagination from "../../../components/Pagination";

export default {
  components: {
    Posts,
    Pagination,
  },
};
</script>
