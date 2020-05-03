<template>
  <div>
    <div>
      <ul class="main-menu">
        <g-link class="inline-block py-8 mr-8" to="/">Home</g-link>
        <g-link class="inline-block py-8" to="/posts">Posts</g-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.main-menu .active--exact,
.main-menu a:hover {
  @apply border-b-2 border-indigo-500;
}
</style>
