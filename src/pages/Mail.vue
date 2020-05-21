<template>
  <Layout class="shape">
    <div class="container">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-6xl font-bold text-gray-800">Contact</h1>
        <div class="mt-8">
          <form
            @submit="sendform"
            class="flex flex-wrap justify-between max-w-2xl text-indigo-600"
          >
            <input
              type="text"
              class="w-7/12 mr-4"
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
              class="w-56 text-blue-100 bg-indigo-600 border-indigo-700 cursor-pointer hover:bg-indigo-700"
              type="submit"
              :value="buttonText"
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
      buttonText: "Send",
    };
  },
  methods: {
    sendform(e) {
      this.buttonText = "Sending...";
      e.preventDefault();
      console.log("Sending out an SOS");
      const payload = {
        name: this.name,
        subject: this.subject,
        email: this.email,
      };

      axios
        .post("/.netlify/functions/sendgrid", JSON.stringify(payload), headers)
        .then((res) => {
          if (res.data == "successful") {
            this.buttonText = "Message sent";
          }
        })
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
