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

    <section class="container my-20">
      <h3 class="mb-2 text-xl font-bold text-primary">GALLERY</h3>
      <h4 class="max-w-md mb-8 text-3xl font-semibold text-primary-dark">
        A Collection Of Images From Recent Projects
      </h4>
      <p class="max-w-4xl mb-8 text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <ul class="grid gap-8 my-20 grid-col-2 md:grid-cols-3 lg:grid-cols-4">
        <li
          v-for="(item, index) in $static.wordPressPage.acf.gallery"
          :key="item.id"
        >
          <GImage @click="openGallery(index)" :src="item.imageDownloaded" />
        </li>
      </ul>
    </section>
    <ClientOnly>
      <LightBox
        ref="lightbox"
        :media="media"
        :showLightBox="false"
        :showThumbs="false"
        :showCaption="true"
      ></LightBox>
    </ClientOnly>
  </Layout>
</template>

<static-query>
query {
  wordPressPage(id: "18"){
    yoastHead
    title
    featuredMedia{
      imageDownloaded
    }
    acf{
      gallery{
        caption
        imageDownloaded
      }
    }
  }
}
</static-query>

<script>
require("vue-image-lightbox/dist/vue-image-lightbox.min.css");

export default {
  created() {
    this.fetchMetaDatas(this.$static.wordPressPage.yoastHead);
  },
  computed: {
    media() {
      return this.$static.wordPressPage.acf.gallery.map((item) => {
        return {
          src: item.imageDownloaded.src,
          caption: item.caption,
        };
      });
    },
  },
  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index);
    },
  },
};
</script>

<style>
.vue-lb-content {
  padding: 40px 60px !important;
  background: #fff !important;
}
.vue-lb-button-close svg {
  fill: #111 !important;
}
.vue-lb-header {
  margin-top: -20px;
}
</style>
