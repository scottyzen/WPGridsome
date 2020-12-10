<template>
  <Layout class="shape">
    <div class="container">
      <PageTitle title="Contact" />
      <div class="flex flex-col items-center justify-center">
        <form @submit.prevent="submitForm" class="flex flex-wrap justify-between max-w-3xl gap-4 text-indigo-600">
          <input type="text" class="w-full md:w-5/12" name="name" v-model="formData.name" placeholder="Full Name " required />
          <input type="email" class="w-full md:flex-1" name="email" v-model="formData.email" placeholder="Email Address" required />
          <textarea class="w-full outline-none" v-model="formData.comment" cols="30" rows="10" placeholder="Message" required></textarea>
          <input class="text-white duration-300 bg-indigo-500 border-indigo-700 cursor-pointer hover:bg-indigo-700" type="submit" value="Send Message" />

          <span class="flex-1 p-3 mt-4 font-light dark:text-indigo-100">{{status}}</span>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script>
import { runMutation } from "../mixins/runMutation";

export default {
  data() {
    return {
      formData: {},
      status: "",
    };
  },
  components: {
    PageTitle: () => import("../components/PageTitle"),
  },
  mixins: [runMutation],
  methods: {
    async submitForm() {
      const { name, email, comment } = JSON.parse(
        JSON.stringify(this.formData)
      );
      const res = await this.runMutation(`mutation {
        sendEmail(input: { subject: "Message from WPGridsome", body: "${comment}", from: "${name} <${email}>" }) {
          sent
          message
        }
      }`);

      this.status = res.sendEmail.message;
    },
  },
};
</script>

<style lang="postcss">
input,
textarea {
  @apply border-b p-3 px-5 rounded-md outline-none shadow border-indigo-300;
  outline: none !important;
}

input:not([type="submit"]),
input:not([type="submit"]),
textarea {
  @apply focus:outline-none focus:ring-2 focus:ring-yellow-400;
}
</style>