<template>
  <Layout>
    <PageTitle
      :pageTitle="$static.wordPressPage.title"
      :style="{
        backgroundImage: this.$static.wordPressPage.featuredMedia
          ? `url(${this.$static.wordPressPage.featuredMedia.imageDownloaded.src})`
          : ``,
      }"
      class="bg-cover"
    />

    <section></section>
  </Layout>
</template>

<static-query>
query {
  wordPressPage(id: "16"){
    title
    yoastHead
    featuredMedia{
      imageDownloaded
    }
  }
}
</static-query>

<script>
export default {
  created() {
    this.fetchMetaDatas(this.$static.wordPressPage.yoastHead);
  },
};
</script>
