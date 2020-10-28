<template>
  <Layout class="shape">
    <div class="container min-h-screen">
      <div class="flex flex-col items-center justify-center p-8 mt-12">
        <h1 class="font-bold text-gray-800 text-7xl">
          Get In Touch
        </h1>
        <h2 class="text-xl text-gray-700">A WordPress starter for Gridsome</h2>
      </div>
    </div>
    <div class="container -mt-56">
      <div class="flex flex-col items-center justify-center">
        <div>
          <form
            @submit="sendform"
            class="flex flex-wrap justify-between max-w-2xl text-orange-500"
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
            <textarea
              class="w-full h-32"
              name="message"
              v-model="message"
              placeholder="Message"
            />
            <input
              class="w-56 mx-auto text-blue-100 bg-orange-500 border-orange-600 cursor-pointer hover:bg-orange-600"
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
input,
textarea {
  @apply border-b p-3 px-5 rounded-md mb-5 outline-none shadow-xs;
}
input:active,
input:focus {
  @apply shadow-outline;
}
</style>
