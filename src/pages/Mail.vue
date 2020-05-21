<template>
  <Layout class="shape">
    <div class="container">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-6xl font-bold text-gray-800">Contact</h1>
        <div class="mt-8">
          <form @submit="sendform">
            <input
              type="text"
              name="name"
              v-model="name"
              placeholder="Full Name "
            />
            <input
              type="text"
              name="subject"
              v-model="subject"
              placeholder="Subject"
            />
            <input
              type="email"
              name="email"
              v-model="email"
              placeholder="Email Address"
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import axios from "axios";
const headers = {
  headers: {
    "Content-Type": "application/json",
  },
};
export default {
  data() {
    return {
      name: "",
      subject: "",
      email: "",
    };
  },
  methods: {
    sendform(e) {
      console.log("Sending out an SOS");
      const payload = {
        name: this.name,
        subject: this.subject,
        email: this.email,
      };
      console.log(payload);

      axios
        .push("/.netlify/functions/sendgrid", payload, headers)
        .then((res) => {
          console.log(res);
        });

      e.preventDefault();
    },
  },
};
</script>

<style lang="postcss" scoped>
input {
  @apply border p-3 px-5 w-full;
}
</style>
