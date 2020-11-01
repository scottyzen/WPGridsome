
module.exports = function (api) {

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allSettings {
        readingSettingsPostsPerPage
      }
      posts(first: 999) {
        edges {
          node {
            slug
            databaseId
          }
          cursor
        }
      }
    }
    `)
    const perPage = data.allSettings.readingSettingsPostsPerPage;
    const totalNumberOfPosts = data.posts.edges.length;
    const numberOfPagesForPagination = Math.round(totalNumberOfPosts / perPage);
    
    // Pagination 
    for (let i = 1; i < numberOfPagesForPagination; i++) {
      createPage({
        path: `/posts/page/${i + 1}`,
        component: './src/pages/posts/page/PageNumber.vue',
        context: {
          cursor: (data.posts.edges[i * perPage - 1].cursor) ? data.posts.edges[i * perPage - 1].cursor : '',
          currentPage: i + 1,
          total: totalNumberOfPosts
        }
      })
    }

    // Single Post 
    data.posts.edges.forEach(({ node }) => {
      createPage({
        path: `/post/${node.slug}`,
        component: './src/templates/Post.vue',
        context: {
          databaseId: node.databaseId
        }
      })
    })


  })
}