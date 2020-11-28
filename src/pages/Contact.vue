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
import axios from "axios";
import PageTitle from "../components/PageTitle";
const headers = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/x-www-form-urlencoded",
  },
};
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
      console.log("Sending");
      const { data } = await axios.post(process.env.GRIDSOME_API_URL, {
        query: `
                mutation SEND_EMAIL($subject: String!, $body: String!) {
                    sendEmail( input: { subject: $subject, body: $body } ) 
                    {
                        origin
                        sent
                        message
                    }
                }`,
        variables: {
          subject: this.subject,
          body: this.body,
        },
        headers,
      });
      console.log(data);
      if (data.data.sendEmail.sent) {
        this.sent = true;
        console.log("Message has been sent");
      }
    },
  },
};
</script>

<style>
</style>