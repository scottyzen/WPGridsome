<template>
  <div class="my-32 text-center">
    <h3 class="mb-8 text-4xl font-semibold">Get Notified When its Ready</h3>
    <form
      @submit.prevent="signup"
      id="mailchimp-form"
      class="inline-flex items-center justify-end w-full max-w-xl"
    >
      <input
        type="email"
        name="email"
        v-model="formData.email"
        placeholder="Enter Your Email Address"
        required
      />
      <input type="submit" value="Notify Me" />
    </form>
    <p v-if="isSubscribed" class="absolute left-0 w-full mt-8 text-green-400">
      Successfully Subscribed.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: '',
      },
      isSubscribed: false,
    }
  },
  methods: {
    async signup() {
      const fetchResponse = await fetch('/.netlify/functions/mailchimp', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.formData),
      })
      const data = await fetchResponse.json()
      if (data.status !== 400) {
        this.isSubscribed = true
        this.formData = {}
        setTimeout(() => {
          this.isSubscribed = false
        }, 3000)
      }
    },
  },
}
</script>

<style lang="postcss">
#mailchimp-form input[type='email'] {
  @apply flex-1 p-4 bg-white rounded-md shadow-lg outline-none appearance-none dark:bg-gray-800 border-0;
}
#mailchimp-form input[type='submit'] {
  @apply absolute p-2 m-2 text-white bg-indigo-600 rounded hover:bg-indigo-500 w-28 border-0;
}
</style>
