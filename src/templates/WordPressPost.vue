<template>
  <Layout>
    <article class="content">
      <div
        v-if="$page.wordPressPost.featuredMedia"
        class="w-full -mb-24 bg-center bg-cover h-90vh featured-image shadow-custom"
        :style="{
          backgroundImage: `url(${$page.wordPressPost.featuredMedia.imageDownloaded.src})`,
        }"
      ></div>
      <div
        class="z-10 w-full max-w-5xl px-8 py-4 mx-auto -mt-12 bg-white border-b border-indigo-200 shadow-lg dark:bg-gray-800 dark:border-gray-800"
      >
        <h1 class="px-8 mx-auto my-12 text-4xl leading-none text-center">
          {{ $page.wordPressPost.title }}
        </h1>
        <div
          class="px-8 py-4 m-auto mt-8 font-light prose post-content dark:text-gray-100 max-w-none"
          v-html="$page.wordPressPost.content"
        ></div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query Post($id: ID!) {
  wordPressPost(id: $id) {
    title
    yoastHead
    content
    featuredMedia {
      sourceUrl
      imageDownloaded
      altText
      title
      mediaDetails {
        width
      }
    }
    categories {
      id
      slug
      title
    }
  }
}
</page-query>

<script>
export default {
  created() {
    this.fetchMetaDatas(this.$page.wordPressPost.yoastHead);
  },
};
</script>

<style>
.h-90vh {
  height: 90vh;
}
</style>
