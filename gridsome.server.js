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
      products {
        edges {
          node {
            databaseId
            slug
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
    for (let i = 0; i < numberOfPagesForPagination; i++) {

      createPage({
        path: (i === 0) ? `/posts` : `/posts/page/${i + 1}`,
        component: './src/pages/PostsArchive.vue',
        context: {
          offset: parseInt(i * perPage),
          perPage: parseInt(perPage),
          pageInfo: {
            currentPage: parseInt(i + 1),
            total: parseInt(totalNumberOfPosts),
          }
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

    // Single Product 
    data.products.edges.forEach(({ node }) => {
      createPage({
        path: `/product/${node.slug}`,
        component: './src/templates/Product.vue',
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
        component: './src/pages/CategoriesArchive.vue',
        context: {
          databaseId: node.databaseId,
          name: node.name
        }
      })
    })


  })
}