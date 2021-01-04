<template>
  <Layout class="shape">
    <div class="container">
      <PageTitle :title="$context.name" />
      <PostGrid :posts="$page.posts.edges" />
    </div>
  </Layout>
</template>

<page-query>
query Categories($databaseId: Int){
  posts(where: {categoryId: $databaseId}, first: 48) {
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
import PostGrid from "../components/PostGrid";

export default {
  components: {
    PostGrid,
  },
};
</script>
