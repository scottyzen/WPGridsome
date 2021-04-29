<template>
  <Layout>
    <PageTitle :title="$page.wordPressCategory.title" class="-mb-6" />
    <div class="px-4 pt-10 mx-auto my-8 max-w-7xl md:p-8">
      <PostGrid :posts="$page.wordPressCategory.belongsTo.edges" />
      <Pager
        class="text-center pagination"
        :info="$page.wordPressCategory.belongsTo.pageInfo"
      />
    </div>
  </Layout>
</template>

<page-query>
query WordPressCategory($id: ID!, $page: Int) {
  wordPressCategory(id: $id) {
    title
    belongsTo(page: $page, perPage: 12) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on WordPressPost {
            title
            slug
            id
            excerpt
            featuredMedia {
              sourceUrl
              imageDownloaded
            }
            categories {
              title
              slug
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import PostGrid from '../components/PostGrid'
export default {
  components: {
    Pager,
    PostGrid,
  },
}
</script>
