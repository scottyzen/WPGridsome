<template>
  <form
    @submit.prevent="submitForm"
    class="grid gap-4 p-12 text-white sm:grid-cols-2 bg-primary"
  >
    <div class="text-2xl font-semibold col-span-full">Contact Form</div>
    <input type="hidden" name="form-name" value="Contact Form" />
    <p hidden>
      <label> Don’t fill this out: <input name="bot-field" /> </label>
    </p>
    <div>
      <label for="name">Name *</label>
      <input type="text" name="name" required v-model="formData.name" />
    </div>
    <div>
      <label for="email">Email *</label>
      <input type="email" name="email" required v-model="formData.email" />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input type="tel" name="phone" v-model="formData.phone" />
    </div>
    <div>
      <label for="subject">Subject *</label>
      <input type="text" name="subject" required v-model="formData.subject" />
    </div>

    <div class="mb-4 col-span-full">
      <label for="message">Message *</label>
      <textarea
        required
        class="block w-full"
        name="message"
        v-model="formData.message"
        rows="5"
      ></textarea>
    </div>

    <button
      type="submit"
      class="inline-block p-2 cursor-pointer bg-primary-dark hover:bg-white hover:text-primary-dark"
    >
      Submit
    </button>
    <span class="py-2">{{ status }}</span>
  </form>
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
  mixins: [runMutation],
  methods: {
    async submitForm() {
      const formData = JSON.parse(JSON.stringify(this.formData));
      const emailTemplate = `Name: ${formData.name} <br> Phone Number: ${formData.phone} <br> Message: ${formData.message}`;

      const res = await this.runMutation(`mutation {
        sendEmail(input: { 
            subject: "Message from Surface Magic", 
            body: "${emailTemplate}", 
            replyTo: "${formData.name} <${formData.email}>" 
            }){
                message
            }
        }`);

      this.status = res.data.data.sendEmail.message;
      if (this.status == "Email Sent") {
        setTimeout(() => {
          this.$router.push("/success");
        }, 600);
      }
    },
  },
};
</script>

<style scoped lang="postcss">
input,
textarea {
  @apply text-black w-full p-2;
}
</style>
