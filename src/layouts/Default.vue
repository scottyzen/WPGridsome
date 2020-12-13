<template >
  <div class="text-gray-800 dark:bg-gray-700 dark:text-white shape">
    <header class="absolute inset-x-0 top-0 mb-8 border-b dark:border-gray-700">
      <div class="container flex items-center justify-between">
        <g-link class="font-bold" to="/">{{$static.metadata.siteName}}</g-link>
        <Nav />
      </div>
    </header>
    <transition name="fade" appear>
      <main class="min-h-screen pt-32 pb-12">
        <!-- a wrapper for slot is needed -->
        <slot /> <!-- the content -->
      </main>
    </transition>]
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default {
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
a,
button {
  cursor: pointer;
  outline: none !important;
}

.shape {
  background-image: url("../../src/assets/images/shape.svg");
  background-repeat: no-repeat;
  background-size: auto 400px;
  min-height: 600px;
}
.dark .shape {
  background-image: url("../../src/assets/images/shape-dark.svg") !important;
}
@media (min-width: 768px) {
  .shape {
    background-size: contain;
  }
}

.fade-enter-active {
  transition: opacity 600ms ease-out, transform 600ms ease-out;
  will-change: opacity, transform;
}

.fade-enter {
  opacity: 0;
  transform: scale(0.975);
}
</style>
