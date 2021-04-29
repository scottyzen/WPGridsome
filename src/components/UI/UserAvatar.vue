<template>
  <div>
    <img @click="checkUser" class="ml-6 border border-white rounded-full shadow" width="32" height="32" src="https://scottyzen.com/img/me_x2.jpg" alt="Scott Kennedy">
  </div>
</template>

<script>
import { runMutation } from "../../mixins/runMutation";
export default {
  mixins: [runMutation],

  methods: {
    async checkUser() {
      const res = await this.runMutation(`mutation LoginUser {
        login( input: {
          clientMutationId: "uniqueId",
          username: "your_login",
          password: "your password"
        } ) {
          authToken
          user {
            id
            name
          }
        }
      }`);

      console.log(res.data.data);
    },
  },
};
</script>

<style>
</style>