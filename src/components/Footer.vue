<template>
  <footer class="py-4 mt-12 text-white bg-primary-dark">
    <div class="container flex flex-wrap justify-between my-12">
      <div class="w-full mb-12 text-center md:w-auto">
        <g-link to="/"
          ><g-image
            class="inline-block"
            src="~/assets/images/logo.png"
          ></g-image
        ></g-link>
      </div>

      <div class="w-1/2 mb-12 md:w-auto">
        <WPMenu slug="main-menu" />
      </div>
      <div class="w-1/2 mb-12 md:w-auto">
        <WPMenu slug="footer-menu-2" />
      </div>
      <div class="w-1/2 mb-12 md:w-auto">
        <address class="not-italic">
          Ballysop, <br />
          Whitechurch, <br />
          New Ross, <br />
          Wexford
        </address>
      </div>
      <div class="w-1/2 mb-12 md:w-auto">
        <div>Tel: <a href="tel:0864072814">086 407 2814</a></div>
        <div>
          Email:
          <a href="mailto:repairs@surfacemagic.ie">repairs@surfacemagic.ie</a>
        </div>
        <div class="flex mt-8">
          <a
            href="https://ie.linkedin.com/company/surface-magic-ireland"
            target="_blank"
            rel="nofollow"
            class="mr-4"
            ><svg
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="24"
              width="24"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              ></path></svg
          ></a>
          <a
            href="https://www.facebook.com/SurfaceMagicIreland/"
            target="_blank"
            rel="nofollow"
            ><svg
              enable-background="new 0 0 24 24"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path
                d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"
              /></svg
          ></a>
        </div>
      </div>
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
