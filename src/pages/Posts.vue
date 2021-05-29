<template>
  <Layout>
    <PageTitle title="Posts" class="-mb-6" />
    <div class="px-4 pt-10 mx-auto my-8 max-w-7xl md:p-8">
      <PostGrid :posts="$page.allWordPressPost.edges" />
      <Pager
        class="text-center pagination"
        :info="$page.allWordPressPost.pageInfo"
      />
    </div>
  </Layout>
</template>

<page-query>
query GetAllPosts {
  allWordPressPost {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        path
        excerpt
        slug
        featuredMedia {
          sourceUrl
          downloaded
        }
        categories {
          name
          id
          slug
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
import PostGrid from "../components/PostGrid";
export default {
  components: {
    PostGrid,
    Pager,
  },
};
</script>
