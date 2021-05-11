<template>
  <picture class="w-full overflow-hidden hero-height">
    <slot></slot>
  </picture>
</template>

<style scoped>
img {
  height: 420px;
  object-fit: cover;
}
@media (min-width: 768px) {
  img {
    height: 540px;
  }
}
@media (min-width: 960px) {
  img {
    height: 540px;
  }
}
@media (min-width: 1180px) {
  img {
    height: 600px;
  }
}
</style>
