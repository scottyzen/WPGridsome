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
        }
      }
      pages (first: 999){
        edges {
          node {
            title
            uri
            slug
          }
        }
      }
    }
    `)
    const perPage = data.allSettings.readingSettingsPostsPerPage;
    const totalNumberOfPosts = data.posts.edges.length;
    const numberOfPagesForPagination = Math.ceil(totalNumberOfPosts / perPage);
    
    // Pagination 
    for (let i = 1; i < numberOfPagesForPagination; i++) {

      console.log(`Creating page: /posts/page/${i + 1}`);

      createPage({
        path: `/posts/page/${i + 1}`,
        component: './src/pages/posts/page/PageNumber.vue',
        context: {
          currentPage: parseInt(i + 1),
          total: parseInt(totalNumberOfPosts),
          offset: parseInt(i * perPage) ,
          perPage: parseInt(perPage) 
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

    // Single Page 
    data.pages.edges.forEach(({ node }) => {
      console.log(`Create page: /${node.slug}`);
      createPage({
        path: `/${node.slug}`,
        component: './src/templates/Page.vue',
        context: {
          uri: node.uri
        }
      })
    })


  })
}