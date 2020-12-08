<template>
  <Layout class="shape">
    <div class="container">
      <PageTitle title="Contact" />
      <div class="flex flex-col items-center justify-center">
        <form @submit.prevent="submitForm" class="flex flex-wrap justify-between max-w-3xl text-indigo-600">
          <input type="text" class="w-6/12 mr-4" name="name" v-model="formData.name" placeholder="Full Name " required />
          <input type="text" class="flex-1" name="subject" v-model="formData.subject" placeholder="Subject" required />
          <input type="email" class="w-full" name="email" v-model="formData.email" placeholder="Email Address" required />
          <textarea class="w-full outline-none" v-model="formData.comment" cols="30" rows="10" placeholder="Message" required></textarea>
          <input class="text-white duration-300 bg-indigo-500 border-indigo-700 cursor-pointer hover:bg-indigo-700" type="submit" value="Send Message" />
          <span class="flex-1 p-3 mt-4 font-light text-yellow-500" :class="{'text-red-500': status.type == 'error', 'text-green-500': status.type == 'success'}">{{status.message}}</span>
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
      status: {},
    };
  },
  components: {
    PageTitle: () => import("../components/PageTitle"),
  },
  mixins: [runMutation],
  methods: {
    async submitForm() {
      console.log("start");
      const { name, subject, email, comment } = JSON.parse(
        JSON.stringify(this.formData)
      );

      this.displayMessage("Sending...");
      const res = await this.runMutation(`mutation {
        sendEmail(input: { subject: "${subject}", body: "lkdcjwlkdcjlk" }) {
          sent
          message
        }
      }`);

      this.displayMessage(
        res.sendEmail.message,
        res.sendEmail.sent ? "success" : "error"
      );
    },
    displayMessage(message, type) {
      this.status.message = message;
      this.status.type = type;
    },
  },
};
</script>

<style lang="postcss">
input,
textarea {
  @apply border-b p-3 px-5 rounded-md mt-4 outline-none shadow border-indigo-300;
  outline: none !important;
}

input:not([type="submit"]),
input:not([type="submit"]),
textarea {
  @apply focus:outline-none focus:ring-2 focus:ring-yellow-400;
}
</style>