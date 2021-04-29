<template>
  <picture class="w-full overflow-hidden h-70-screen">
    <source
      srcset="/gast-lg.avif"
      type="image/avif"
      media="(min-width: 1025px)"
      width="1600"
      height="913"
      class="w-full bg-gray-900 h-70-screen"
      alt="Image of a cheetah"
      loading="lazy"
    />
    <source
      srcset="/gast.avif"
      type="image/avif"
      media="(min-width: 480px)"
      width="1024 "
      height="584"
      class="w-full bg-gray-900 md:hidden h-70-screen"
      alt="Image of a cheetah"
      loading="lazy"
    />
    <source
      srcset="/gast-sm.avif"
      type="image/avif"
      width="480 "
      height="522"
      class="object-cover w-full bg-gray-900 h-70-screen md:hidden"
      alt="Image of a cheetah"
      loading="lazy"
    />
    <source
      media="(min-width: 1025px)"
      srcset="../../assets/images/gast-lg.jpg"
      width="1600"
      height="913"
      class="w-full bg-gray-900 h-70-screen"
      alt="Image of a cheetah"
      loading="lazy"
    />
    <source
      media="(min-width: 480px)"
      srcset="../../assets/images/gast.jpg"
      width="1024 "
      height=" 584"
      class="w-full bg-gray-900 h-70-screen"
      alt="Image of a cheetah"
      loading="lazy"
    />
    <img
      alt="Image of a cheetah"
      src="../../assets/images/gast-sm.jpg"
      width="480 "
      height="522"
      class="object-cover w-full bg-gray-900 h-70-screen"
      loading="lazy"
    />
  </picture>
</template>

<style>
.h-70-screen {
  height: 480px;
}
@media (min-width: 768px) {
  .h-70-screen {
    height: 600px;
  }
}
@media (min-width: 960px) {
  .h-70-screen {
    height: 640px;
  }
}
@media (min-width: 1180px) {
  .h-70-screen {
    height: 700px;
  }
}
</style>
