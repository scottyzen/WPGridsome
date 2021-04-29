<template>
  <div class="text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-white shape">
    <header
      class="fixed inset-x-0 top-0 z-20 transition-shadow duration-500 border-b glass glass-border-color"
    >
      <div class="container flex items-center justify-between">
        <g-link class="font-bold" to="/">WPGridsome</g-link>
        <Nav />
      </div>
    </header>
    <!-- <transition name="fade" appear mode="out-in"> -->
    <main class="min-h-screen">
      <slot />
      <!-- the content -->
    </main>
    <!-- </transition> -->
    <Footer />
  </div>
</template>

<static-query>
query {
  generalSettings {
    title
  }
}
</static-query>

<script>
import Nav from '../components/Nav'
import Footer from '../components/Footer'
export default {
  components: {
    Nav,
    Footer,
  },
}
</script>

<style lang="postcss">
html {
  font-size: 15px;
}
* {
  scroll-behavior: smooth;
}

a,
button {
  cursor: pointer;
  outline: none !important;
}

.container {
  width: 100%;
  max-width: 1400px;
  @apply px-4;
}

/* .shape {
  background-image: url("../../src/assets/images/shape.svg");
  background-repeat: no-repeat;
  background-size: auto 400px;
  min-height: 600px;
}
.dark .shape {
  background-image: url("../../src/assets/images/shape-dark.svg") !important;
} */
/* @media (min-width: 768px) {
  .shape {
    background-size: contain;
  }
} */

.is-scrolled {
  box-shadow: 0 1px 0.9px -30px rgba(0, 0, 0, 0.013),
    0 2.3px 2.2px -30px rgba(0, 0, 0, 0.019),
    0 4.1px 3.9px -30px rgba(0, 0, 0, 0.023),
    0 6.7px 6.4px -30px rgba(0, 0, 0, 0.027),
    0 11.1px 10.6px -30px rgba(0, 0, 0, 0.031),
    0 19.4px 18.5px -30px rgba(0, 0, 0, 0.037),
    0 42px 40px -30px rgba(0, 0, 0, 0.05);
}

.fade-enter-active {
  transition: opacity 1000ms ease-out, transform 1000ms ease-out;
  will-change: opacity, transform;
}

.fade-enter {
  /* opacity: 0; */
  transform: translateY(-8px) scale(1.005);
}

.shadow-custom {
  box-shadow: rgba(0, 0, 0, 0.22) 0px 30px 60px -10px,
    rgba(0, 0, 0, 0.25) 0px 18px 36px -18px;
}
.glass {
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.5);
  /* border-color: rgba(0, 0, 0, 0.6); */
}
.glass-border-color {
  border-color: rgba(255, 255, 255, 0.3);
}
.dark .glass {
  background-color: rgba(6, 10, 19, 0.66);
}
.dark .glass-border-color {
  border-color: rgba(0, 0, 0, 0.5);
}
</style>
