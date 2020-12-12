<template>
  <button class="inline-block mr-6 md:mr-10" @click="toggleTheme" aria-label="Dark Mode Toggle">
    <img v-if="darkmode" class="inline" width="24" height="24" src="../assets/images/sunny.svg" alt="sun icon">
    <img v-else class="inline" width="24" height="24" src="../assets/images/moon.svg" alt="moon icon">
  </button>
</template>

<script>
export default {
  data() {
    return {
      darkmode: false,
    };
  },
  methods: {
    toggleTheme() {
      this.darkmode = !this.darkmode;
      this.applyTheme(this.darkmode);
      localStorage.setItem("DARK_MODE_ENABLED", this.darkmode);
    },
    applyTheme(darkmodeEnabled) {
      this.darkmode = darkmodeEnabled;
      darkmodeEnabled
        ? document.querySelector("html").classList.add("dark")
        : document.querySelector("html").classList.remove("dark");
    },
  },
  beforeMount() {
    const DM_LOCAL = JSON.parse(localStorage.getItem("DARK_MODE_ENABLED"));
    if (DM_LOCAL === null) {
      this.applyTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    } else {
      this.applyTheme(DM_LOCAL);
    }
  },
};
</script>