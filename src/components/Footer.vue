<template>
  <footer class="py-4 mt-12 text-white bg-primary-dark">
    <div class="container flex justify-between my-12">
      <div>
        <g-link to="/"
          ><g-image
            class="w-28 md:w-auto"
            src="~/assets/images/logo.png"
          ></g-image
        ></g-link>
      </div>
      <div>
        <WPMenu slug="main-menu" />
      </div>
      <div>
        <WPMenu slug="footer-menu-2" />
      </div>
      <div></div>
      <div></div>
    </div>
    <p class="p-4 text-sm text-center">
      Copyright 2021 Surface Magic | All Rights Reserved | Web Design by
      <a href="https://2cubed.ie" target="_blank" rel="noopener">2Cubed.ie</a>
    </p>
  </footer>
</template>

<script>
import WPMenu from "../components/WPMenu";
export default {
  components: {
    WPMenu,
  },
};
</script>
