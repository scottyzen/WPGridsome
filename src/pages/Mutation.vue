<template>
  <Layout class="shape">
    <div class="container">
      <PageTitle title="Run Mutation" />
      <button class="block px-4 py-3 mx-auto bg-indigo-500 rounded" @click="fire">Run Mutation</button>
    </div>
  </Layout>
</template>

<script>
import { runMutation } from "../mixins/runMutation";

export default {
  mixins: [runMutation],
  methods: {
    fire() {
      this.runMutation(`mutation {
        updateSettings(input: {generalSettingsDescription: "new"}) {
          allSettings {
            generalSettingsDescription
          }
        }
      }`);
    },
  },
};
</script>
