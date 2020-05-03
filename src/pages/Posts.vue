<template>
  <Layout>
    <div class="container">
      <h1 class="pb-2 mb-2 border-b">POSTS</h1>
      <ul class="grid grid-cols-3 gap-12">
        <li v-for="{ node } in $page.posts.edges" :key="node.id">
          <a :href="`/post/${node.slug}`">
            <g-image
              v-if="node.featuredImage"
              :src="node.featuredImage.sourceUrl"
              class="h-200 object-cover w-full"
            ></g-image>
            <g-image
              v-else
              src="~/assets/images/no-img-found.jpg"
              class="h-200 object-cover w-full"
            ></g-image>

            <span> {{ node.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts(first: 12) {
    edges {
      node {
        title
        slug
        id
        featuredImage {
          sourceUrl(size: POST_THUMBNAIL)
        }
      }
    }
  }
}
</page-query>

<style>
.h-200 {
  height: 200px;
}
</style>
