<template>
  <Layout>
    <article class="content">
      <h1 class="px-8 mx-auto mt-12 mb-20 text-5xl leading-none text-center">{{ $page.post.title }}</h1>
      <div v-if="$page.post.featuredImage" class="max-w-4xl mx-auto mb-12 bg-center bg-cover rounded h-80 featured-image shadow-custom" :style="{
          backgroundImage: `url(${$page.post.featuredImage.node.mediaItemUrl})`,
        }"></div>
      <div class="max-w-2xl px-8 py-4 m-auto mt-8 font-light post-content" v-html="$page.post.content"></div>
    </article>
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
.dark .post-content {
  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    @apply text-gray-100;
  }
}
</style>
