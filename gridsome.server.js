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
      categories {
        edges {
          node {
            slug
            name
            databaseId
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

      console.log(`Creating Post Pagination: /posts/page/${i + 1}`);

      createPage({
        path: `/posts/page/${i + 1}`,
        component: './src/pages/posts/pagination/PostsPagination.vue',
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
      console.log(`Creating Single Post: /post/${node.slug}`);
      createPage({
        path: `/post/${node.slug}`,
        component: './src/templates/Post.vue',
        context: {
          databaseId: node.databaseId
        }
      })
    })

    // Categories Pages
    data.categories.edges.forEach(({ node }) => {
      console.log(`Creating Category Page: /posts/${node.slug}`);
      createPage({
        path: `/posts/${node.slug}`,
        component: './src/pages/posts/CategoriesArchive.vue',
        context: {
          databaseId: node.databaseId,
          name: node.name
        }
      })
    })


  })
}