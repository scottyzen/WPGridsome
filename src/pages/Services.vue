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
      <div class="grid items-center gap-8 md:grid-cols-2">
        <div>
          <div class="flex items-center mb-8">
            <img
              width="64"
              height="64"
              src="../assets/images/icons/noun_Bathroom_2738007.svg"
              alt="Bathroom Repairs"
              class="inline-block mr-8"
              loading="lazy"
            />
            <h2 class="text-3xl font-bold text-primary-dark">
              Bathroom <br />Repairs
            </h2>
          </div>
          <p class="max-w-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <GImage src="~/assets/images/bathroom-repairs.jpg" />
      </div>
    </section>
  </Layout>
</template>

<static-query>
query {
  wordPressPage(id: "14"){
    yoastHead
    title
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
