<template>
  <form
    name="contact"
    method="post"
    v-on:submit.prevent="handleSubmit"
    action="/success/"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    class="grid gap-4 p-12 text-white sm:grid-cols-2 bg-primary"
  >
    <div class="text-2xl font-semibold col-span-full">Contact Form</div>
    <input type="hidden" name="form-name" value="contact" />
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
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData,
        }),
      })
        .then(() => this.$router.push("/success"))
        .catch((error) => alert(error));
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
