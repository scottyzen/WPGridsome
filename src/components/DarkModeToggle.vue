<template>
  <button class="inline-block mr-6 md:mr-10" @click="toggleTheme">
    <g-image v-if="this.$store.state.enableDarkMode" class="inline" width="24" height="24" src="~/assets/images/sunny.svg"></g-image>
    <g-image v-else class="inline" width="24" height="24" src="~/assets/images/moon.svg"></g-image>
  </button>
</template>

<script>
export default {
  methods: {
    toggleTheme() {
      this.$store.commit("SET_THEME", !this.$store.state.enableDarkMode);
    },
  },
};
</script>
