<template>
  <Layout>
    <page-title title="About Surface Magic" id="title-image">
      <g-image src="~/assets/images/About_surface_magic.jpg"></g-image
    ></page-title>

    <!-- ABOUT US  -->
    <section class="container grid items-center gap-8 my-12 md:grid-cols-2">
      <div>
        <h2 class="mb-2 text-xl font-bold text-primary">ABOUT US</h2>
        <h3 class="max-w-md mb-8 text-3xl font-semibold text-primary-dark">
          Surface Magic Are Experts In Surface Repair
        </h3>
        <p class="max-w-md mb-8">
          Surface Magic are Ireland’s No.1 surface repair company. Our
          specialist technicians have the ability to repair many types of
          surfaces, carefully re-creating pattern, colour, shape and finish,
          helping clients save on time, cost of replacements and stops waste
          that will end up in landfill.
        </p>
        <p class="max-w-md mb-8">
          Surface Magic services all industries, whether its Construction,
          Healthcare, Hospitality, Insurance, Retail or Domestic. Our nationwide
          coverage ensures all our clients can Save Time, Save Money and Save
          the Environment. Surface Magic has worked on some major projects
          around Ireland and is the preferred Surface Repair Specialists to most
          companies.
        </p>
        <p class="text-primary">
          <g-link to="/contact" class="underline">Get in touch today</g-link>,
          you won’t know if you don’t ask.
        </p>
      </div>
      <g-image src="~/assets/images/surface-repair.jpg"></g-image>
    </section>

    <!-- MEET THE TEAM  -->
    <section class="py-20 my-24 bg-light">
      <div class="container text-center">
        <h3 class="mb-12 text-3xl font-semibold text-primary-dark">
          Meet the Team
        </h3>
        <GImage
          src="~/assets/images/meet-the-team.jpg"
          alt="Meet the team"
          title="Meet the Team"
          width="1140"
          height="445"
          class="w-full"
        />
      </div>
    </section>

    <!-- ABOUT US  -->
    <section class="container grid items-center gap-8 my-12 md:grid-cols-2">
      <g-image src="~/assets/images/sectors.jpg"></g-image>
      <div class="md:pl-12">
        <h2 class="mb-2 text-xl font-bold text-primary">SECTORS</h2>
        <h3 class="max-w-md mb-8 text-3xl font-semibold text-primary-dark">
          Surface Magic Operate Across Multiple Sectors
        </h3>
        <ul class="pl-6 mb-8 text-gray-700 list-disc">
          <li>
            <strong>Construction</strong> – Residential, Commercial &
            Pharmacutica
          </li>
          <li><strong>Retail</strong> – Shopping Centres, High End Stores</li>
          <li>
            <strong>Hospitality</strong> – Shopping Centres, High End Stores
          </li>
          <li>
            <strong>Healthcare</strong> – Hospitals, Care Homes & Rehab Centres
          </li>
          <li><strong>Education</strong> – Schools, Colleges</li>
          <li><strong>Facilities Management</strong> – Offices, Apartments</li>
          <li><strong>Insurance</strong></li>
          <li><strong>Caravan & Motorhome</strong> – Holiday Parks</li>
          <li><strong>Domestic</strong> – Houses, Apartments</li>
        </ul>
        <g-link to="/services" class="button">View All Services</g-link>
      </div>
    </section>
  </Layout>
</template>

<static-query>
query {
  wordPressPage(id: "12"){
    yoastHead
    featuredMedia{
      imageDownloaded
      title
      altText
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

<style scoped>
#title-image {
  background: url("../assets/images/About_surface_magic.jpg") center;
  background-size: cover;
}
</style>
