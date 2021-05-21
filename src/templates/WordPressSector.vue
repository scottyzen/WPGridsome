<template>
  <Layout>
    <PageTitle
      :pageTitle="$page.wordPressSector.title"
      :style="{
        backgroundImage: this.$page.wordPressSector.featuredMedia
          ? `url(${this.$page.wordPressSector.featuredMedia.imageDownloaded.src})`
          : ``,
      }"
      class="bg-cover"
    />

    <article class="container my-20">
      <h2
        class="mb-8 text-3xl font-bold text-primary-dark"
        v-html="$page.wordPressSector.title"
      ></h2>

      <div v-html="$page.wordPressSector.content"></div>
    </article>

    <!-- GALLERY  -->
    <section class="container my-20">
      <ul class="grid grid-cols-2 gap-8">
        <li v-for="item in $page.wordPressSector.acf.gallery" :key="item.key">
          <g-image :src="item.imageDownloaded"></g-image>
        </li>
      </ul>
    </section>

    <!-- GET IN TOUCH  -->
    <div class="py-20 -mb-12 bg-light">
      <section class="container grid items-center gap-8 md:grid-cols-2">
        <div>
          <h3 class="mb-2 text-xl font-bold text-primary">GET IN TOUCH</h3>
          <h4 class="max-w-md mb-8 text-3xl font-semibold text-primary-dark">
            Book Your Professional Property Repairs Today
          </h4>
          <p class="max-w-md mb-8">
            Surface Magic are a trusted & professional company with a great
            reputation to uphold in the trades business. We are vat registered
            and insured. We have experts in all areas of home repairs.
          </p>
          <SmallNav class="flex font-semibold text-primary" />
        </div>
        <ContactForm />
      </section>
    </div>
  </Layout>
</template>

<page-query>
query Sector($path: String!) {
  wordPressSector(path: $path) {
    title
    content
    yoastHead
    featuredMedia{
      imageDownloaded
    }
    acf{
      gallery{
        id
        imageDownloaded
      }
    }
  }
}
</page-query>

<script>
import ContactForm from "../components/ContactForm";
import SmallNav from "../components/SmallNav";
export default {
  components: {
    ContactForm,
    SmallNav,
  },
  created() {
    this.fetchMetaDatas(this.$static.wordPressPage.yoastHead);
  },
};
</script>
