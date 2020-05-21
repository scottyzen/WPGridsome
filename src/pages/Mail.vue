<template>
  <Layout class="shape">
    <div class="container">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-6xl font-bold text-gray-800">Contact</h1>
        <div class="mt-8">
          <form
            @submit="sendform"
            class="flex flex-wrap justify-between text-indigo-600"
          >
            <input
              type="text"
              class="w-6/12 mr-4"
              name="name"
              v-model="name"
              placeholder="Full Name "
            />
            <input
              type="text"
              class="flex-1"
              name="subject"
              v-model="subject"
              placeholder="Subject"
            />
            <input
              type="email"
              class="w-full"
              name="email"
              v-model="email"
              placeholder="Email Address"
            />
            <input
              class="text-blue-100 bg-indigo-600 border-indigo-700 cursor-pointer"
              type="submit"
              value="Send"
            />
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
      e.preventDefault();
      console.log("Sending out an SOS");
      const payload = {
        name: this.name,
        subject: this.subject,
        email: this.email,
      };

      axios
        .post("/.netlify/functions/sendgrid", JSON.stringify(payload), headers)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="postcss" scoped>
input {
  @apply border-b p-3 px-5 rounded-md mt-4 outline-none shadow-xs;
}
input:active,
input:focus {
  @apply shadow-outline;
}
</style>
