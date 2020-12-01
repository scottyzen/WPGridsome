<template>
  <Layout class="shape">
    <div class="container">
      <PageTitle title="Blog" />
      <PostGrid :posts="$page.posts.edges" />
      <Pagination :perPage="$context.perPage" :pageInfo="$context.pageInfo" />
    </div>
  </Layout>
</template>

<page-query>
query ($offset: Int, $perPage: Int) {
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
              slug
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
import PostGrid from "../components/PostGrid";
import Pagination from "../components/Pagination";
import PageTitle from "../components/PageTitle";

export default {
  components: {
    PostGrid,
    Pagination,
    PageTitle,
  },
};
</script>

<style>
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
