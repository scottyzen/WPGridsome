<template>
  <picture class="w-full overflow-hidden hero-height">
    <!-- <source
      media="(min-width: 1025px)"
      srcset="../../assets/images/gast-lg.jpg"
      width="1600"
      height="913"
      class="w-full bg-gray-900 hero-height"
      alt="Image of a cheetah"
      loading="lazy"
    />
    <source
      media="(min-width: 480px)"
      srcset="../../assets/images/gast.jpg"
      width="1024 "
      height=" 584"
      class="w-full bg-gray-900 hero-height"
      alt="Image of a cheetah"
      loading="lazy"
    /> -->
    <img
      alt="Image of a cheetah"
      src="../../assets/images/hero.jpg"
      width="480 "
      height="522"
      class="object-cover w-full bg-gray-900 hero-height"
      loading="lazy"
    />
  </picture>
</template>

<style>
.hero-height {
  height: 420px;
}
@media (min-width: 768px) {
  .hero-height {
    height: 540px;
  }
}
@media (min-width: 960px) {
  .hero-height {
    height: 540px;
  }
}
@media (min-width: 1180px) {
  .hero-height {
    height: 600px;
  }
}
</style>
