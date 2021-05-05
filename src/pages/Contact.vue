<template>
  <Layout class="shape">
    <PageTitle title="Contact" />
    <div class="container my-12">
      <div class="flex flex-col items-center justify-center">
        <form
          @submit.prevent="submitForm"
          class="flex flex-wrap justify-between max-w-3xl text-indigo-600 md:gap-4"
        >
          <input
            type="text"
            class="w-full mb-4 md:m-0 md:w-5/12"
            name="name"
            v-model="formData.name"
            placeholder="Full Name "
            required
          />
          <input
            type="email"
            class="w-full mb-4 md:m-0 md:flex-1"
            name="email"
            v-model="formData.email"
            placeholder="Email Address"
            required
          />
          <textarea
            class="w-full mb-4 outline-none md:m-0"
            v-model="formData.comment"
            cols="30"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <input
            class="text-white duration-300 bg-indigo-500 border-indigo-700 cursor-pointer hover:bg-indigo-700"
            type="submit"
            value="Send Message"
          />

          <span class="flex-1 p-3 font-light">{{ status }}</span>
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
      const formData = JSON.parse(JSON.stringify(this.formData));
      const res = await this.runMutation(`mutation {
        sendEmail(input: { subject: "Message from WPGridsome", body: "${formData}", replyTo: "${formData.name} <${formData.email}>" }) {
          sent
          message
        }
      }`);

      this.status = res.data.data.sendEmail.message;
    },
  },
};
</script>

<style lang="postcss">
input:not([type="search"]),
textarea {
  @apply border-b p-3 px-5 rounded-md outline-none shadow border-indigo-300;
  outline: none !important;
}

input:not([type="search"], [type="submit"]),
textarea {
  @apply focus:outline-none focus:ring-2 focus:ring-indigo-400;
}
</style>
