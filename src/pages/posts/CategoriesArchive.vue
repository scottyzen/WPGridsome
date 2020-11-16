<template>
  <Layout class="shape">
    <div class="container">
      <div class="flex flex-col items-center justify-center mb-48">
        <h1 class="text-6xl font-bold text-gray-800">{{ $context.name }}</h1>
        <h2 class="text-xl text-gray-700">A WordPress starter for Gridsome</h2>
      </div>
      <Posts :posts="$page.posts.edges" />
    </div>
  </Layout>
</template>

<page-query>
query Categories($name: String){
  posts(where: {categoryName: $name}) {
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
              slug
            }
          }
        }
        excerpt
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
import Posts from "../../components/Posts";
export default {
  components: {
    Posts,
  },
};
</script>
