
module.exports = function (api) {

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
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

    // Pagination 
    const perPage = process.env.GRIDSOME_POSTS_PER_PAGE;
    const totalNumberOfPosts = data.posts.edges.length;
    const numberOfPagesForPagination = Math.round(totalNumberOfPosts / perPage);

    console.log('numberOfPagesForPagination ' + numberOfPagesForPagination);

    for (let i = 1; i < numberOfPagesForPagination; i++) {
      
      createPage({
        path: `/posts/page/${i + 1}`,
        component: './src/pages/posts/Pager.vue',
        context: {
          cursor: (data.posts.edges[i * 12 - 1].cursor) ? data.posts.edges[i * 12 - 1].cursor : data.posts.edges[i * 12 - 12].cursor,
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