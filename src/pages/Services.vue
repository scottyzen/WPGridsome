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
      <div
        class="flex flex-col-reverse items-center justify-between gap-8  md:flex-nowrap md:flex-row"
      >
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
        <GImage
          class="w-full md:w-1/2"
          src="~/assets/images/bathroom-repairs.jpg"
          alt="Bathroom Repairs"
          width="574"
          height="420"
        />
      </div>
    </section>

    <section class="container my-20">
      <div
        class="flex flex-col items-center justify-between gap-8  md:flex-nowrap md:flex-row"
      >
        <GImage class="w-full md:w-1/2" src="~/assets/images/floor.jpg" />
        <div class="md:ml-auto">
          <div class="flex items-center mb-8">
            <img
              width="64"
              height="64"
              src="../assets/images/icons/noun_Floor_1667809.svg"
              alt="Bathroom Repairs"
              class="inline-block mr-8"
              loading="lazy"
            />
            <h2 class="text-3xl font-bold text-primary-dark">
              Flooring <br />Repairs
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
      </div>
    </section>

    <section class="container my-20">
      <div
        class="flex flex-col-reverse items-center justify-between gap-8  md:flex-nowrap md:flex-row"
      >
        <div>
          <div class="flex items-center mb-8">
            <img
              width="64"
              height="64"
              src="../assets/images/icons/noun_window_1313735.svg"
              alt="Bathroom Repairs"
              class="inline-block mr-8"
              loading="lazy"
            />
            <h2 class="text-3xl font-bold text-primary-dark">
              Window <br />Repairs
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
        <GImage class="w-full md:w-1/2" src="~/assets/images/window.jpg" />
      </div>
    </section>

    <section class="container my-20">
      <div
        class="flex flex-col items-center justify-between gap-8  md:flex-nowrap md:flex-row"
      >
        <GImage class="w-full md:w-1/2" src="~/assets/images/kitchen.jpg" />
        <div class="md:ml-auto">
          <div class="flex items-center mb-8">
            <img
              width="64"
              height="64"
              src="../assets/images/icons/noun_Kitchen_1294335.svg"
              alt="Bathroom Repairs"
              class="inline-block mr-8"
              loading="lazy"
            />
            <h2 class="text-3xl font-bold text-primary-dark">
              Worktop & <br />Kitchen Repairs
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
      </div>
    </section>

    <section class="container my-20">
      <div
        class="flex flex-col-reverse items-center justify-between gap-8  md:flex-nowrap md:flex-row"
      >
        <div>
          <div class="flex items-center mb-8">
            <img
              width="64"
              height="64"
              src="../assets/images/icons/noun_Door_3267183.svg"
              alt="Bathroom Repairs"
              class="inline-block mr-8"
              loading="lazy"
            />
            <h2 class="text-3xl font-bold text-primary-dark">
              Door <br />Repairs
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
        <GImage class="w-full md:w-1/2" src="~/assets/images/door.jpg" />
      </div>
    </section>

    <section class="container my-20">
      <div
        class="flex flex-col items-center justify-between gap-8  md:flex-nowrap md:flex-row"
      >
        <GImage class="w-full md:w-1/2" src="~/assets/images/brick.jpg" />
        <div class="md:ml-auto">
          <div class="flex items-center mb-8">
            <img
              width="64"
              height="64"
              src="../assets/images/icons/noun_brick_1283239.svg"
              alt="Bathroom Repairs"
              class="inline-block mr-8"
              loading="lazy"
            />
            <h2 class="text-3xl font-bold text-primary-dark">
              Brick, Stone & <br />Marble Repairs
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
