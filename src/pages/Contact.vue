<template>
  <Layout class="shape">
    <div class="container">
      <PageTitle title="Contact" />
      <div class="p-8">
        <form class="space-y-4">
          <div class="w-full">
            <label class="inline-block mb-2" for="subject">Subject</label>
            <input class="w-full px-4 py-2 text-gray-800 rounded" v-model="subject" type="text" name="subject" id="subject" placeholder="Subject">
          </div>
          <div class="w-full">
            <label class="inline-block mb-2" for="body">Message</label>
            <textarea class="w-full px-4 py-2 text-gray-800 rounded" v-model="body" name="body" id="body" cols="30" rows="10"></textarea>
          </div>
          <div class="w-full">
            <button class="px-4 py-2 bg-indigo-500 rounded" @click.prevent="sendEmail">Send Message</button>
          </div>
        </form>
      </div>
    </div>

  </Layout>
</template>

<script>
import PageTitle from "../components/PageTitle";

export default {
  data() {
    return {
      subject: "",
      body: "",
      sent: false,
    };
  },
  components: {
    PageTitle,
  },
  methods: {
    async sendEmail() {
      const query = `
        mutation SEND_EMAIL {
            sendEmail(input: {subject: "test email", body: "test email hello"}) {
                origin
                sent
                message
            }
        }`;

      const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      };

      const data = await fetch(process.env.GRIDSOME_API_URL, opts)
        .then((res) => res.json())
        .then(console.log)
        .catch(console.error);
    },
  },
};
</script>
