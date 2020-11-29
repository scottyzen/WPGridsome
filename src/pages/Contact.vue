<template>
  <Layout class="shape">
    <div class="container">
      <PageTitle title="Contact" />
      <div class="flex flex-col items-center justify-center">
        <form @submit.prevent="sendform" class="flex flex-wrap justify-between text-indigo-600 ">
          <input type="text" class="w-6/12 mr-4" name="name" v-model="name" placeholder="Full Name " />
          <input type="text" class="flex-1" name="subject" v-model="subject" placeholder="Subject" />
          <input type="email" class="w-full" name="email" v-model="email" placeholder="Email Address" />
          <textarea class="w-full" v-model="message" name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
          <input class="text-white bg-indigo-500 border-indigo-700 cursor-pointer" type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  </Layout>
</template>

<script>
import axios from "axios";
import PageTitle from "../components/PageTitle";

export default {
  data() {
    return {
      name: "",
      subject: "",
      message: "",
      email: "",
    };
  },
  components: {
    PageTitle,
  },
  methods: {
    sendform(e) {
      console.log("Sending out an SOS");
      const payload = {
        name: this.name,
        subject: this.subject,
        message: this.message,
        email: this.email,
      };
      axios
        .post("/.netlify/functions/sendEmail", JSON.stringify(payload), {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="postcss">
input,
textarea {
  @apply border-b p-3 px-5 rounded-md mt-4 outline-none;
}
input:active,
input:focus {
  @apply ring;
}
</style>