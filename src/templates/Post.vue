<template>
  <Layout>
    <div class=" content">
      <div
        v-if="$page.post.featuredImage"
        class="h-64 mb-12 bg-center bg-cover featured-image"
        :style="{
          backgroundImage: `url(${$page.post.featuredImage.node.mediaItemUrl})`,
        }"
      ></div>

      <h1 class="text-4xl text-center text-gray-800">
        {{ $page.post.title }}
      </h1>
      <div
        class="max-w-2xl m-auto mt-8 font-light text-gray-700 post-content"
        v-html="$page.post.content"
      ></div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($databaseId: ID!){
  post(idType: DATABASE_ID, id: $databaseId) {
    title
    content
    featuredImage {
      node {
        mediaItemUrl
      }
    }
  }
}
</page-query>

<style lang="postcss">
.post-content {
  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    @apply mt-4 mb-2 leading-none text-gray-800 font-medium;
  }

  & h1 {
    @apply text-2xl;
  }

  & h2 {
    @apply text-xl;
  }

  & h3 {
    @apply text-lg;
  }

  & ol {
    list-style: disc;
    list-style-position: inside;
    @apply my-4;
  }

  & ul {
    list-style: decimal;
    list-style-position: inside;
    @apply my-4;
  }

  & hr {
    @apply my-8;
  }

  & img {
    width: 125%;
    max-width: unset;
    margin: 20px;
    margin-left: -12.5%;
  }
}
.sidebar {
  & p {
    font-size: 14px;
  }
}
</style>
