<template>
  <Layout class="shape">
    <div class="container">
      <div class="flex flex-col items-center justify-center mb-48">
        <h1 class="text-6xl font-bold text-gray-800">Blog</h1>
        <h2 class="text-xl text-gray-700">
          A starter for Gridsome using WordPress + WPGraphQL
        </h2>
      </div>
      <Posts :posts="$page.posts.edges" />
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
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";

export default {
  components: {
    Posts,
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
  background: url("../../src/assets/images/shape.svg") no-repeat;
  background-size: auto 400px;
  min-height: 600px;
}
@media (min-width: 768px) {
  .shape {
    background-size: contain;
  }
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
