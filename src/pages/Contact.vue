<template>
  <Layout class="shape">
    <div class="container">
      <PageTitle title="Contact" />
      <div class="flex flex-col items-center justify-center">
        <form @submit.prevent="sendform" class="flex flex-wrap justify-between max-w-3xl text-indigo-600">
          <input type="text" class="w-6/12 mr-4" name="name" v-model="name" placeholder="Full Name " />
          <input type="text" class="flex-1" name="subject" v-model="subject" placeholder="Subject" />
          <input type="email" class="w-full" name="email" v-model="email" placeholder="Email Address" />
          <textarea class="w-full" v-model="message" name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
          <input class="text-white duration-300 bg-indigo-500 border-indigo-700 cursor-pointer hover:bg-indigo-700" type="submit" value="Send Message" />
          <span class="flex-1 p-3 mt-4 text-yellow-500 dark:text-yellow-300">{{status}}</span>
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
      name: null,
      subject: null,
      message: null,
      email: null,
      status: null,
    };
  },
  components: {
    PageTitle,
  },
  methods: {
    sendform() {
      this.status = "Sending...";
      if (!this.formIsValididated()) return;

      axios
        .post(
          "/.netlify/functions/sendEmail",
          JSON.stringify({
            name: this.name,
            subject: this.subject,
            message: this.message,
            email: this.email,
          }),
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          this.status = res.data.sendEmail.sent
            ? "Message Sent"
            : "Sending Failed!";
        })
        .catch((error) => console.log(error));
    },
    formIsValididated() {
      if (!this.name || !this.subject || !this.email || !this.message) {
        this.status = "Some fields are missing";
        return false;
      }
      return true;
    },
  },
};
</script>

<style lang="postcss">
input,
textarea {
  @apply border-b p-3 px-5 rounded-md mt-4 outline-none shadow border-indigo-300;
}

input:not([type="submit"]):active,
input:not([type="submit"]):focus {
  @apply ring;
}
</style>