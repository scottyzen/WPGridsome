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
    <section
      class="container grid items-center gap-8 my-12 mb-32 md:grid-cols-2"
    >
      <div>
        <h3 class="mb-2 text-xl font-bold text-primary">GET IN TOUCH</h3>
        <h4 class="max-w-md mb-8 text-3xl font-semibold text-primary-dark">
          Book Your Professional Property Repairs Today
        </h4>
        <p class="max-w-md mb-8">
          Surface Magic are a trusted & professional company with a great
          reputation to uphold in the trades business. We are vat registered and
          insured. We have experts in all areas of home repairs.
        </p>
        <SmallNav
          class="flex font-semibold text-primary"
          direction="col"
          showAddress
        />
      </div>
      <ContactForm />
    </section>
  </Layout>
</template>

<static-query>
query {
  wordPressPage(id: "22"){
    yoastHead
    title
    featuredMedia{
      imageDownloaded
    }
  }
}
</static-query>

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
