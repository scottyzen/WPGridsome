<template>
  <Layout>
    <div class="container">
      <h1 class="mb-8 text-4xl text-center text-gray-800">
        {{ $page.post.title }}
      </h1>
      <div
        class="max-w-3xl m-auto font-light text-gray-700 post-content"
        v-html="$page.post.content"
      ></div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($id: ID!){
  post(idType: DATABASE_ID, id: $id) {
    databaseId
    title
    content
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
</style>
