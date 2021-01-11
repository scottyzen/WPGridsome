<template>
  <Layout class="shape">
    <div class="container">
      <PageTitle title="Checkout" />

      <EmptyCart v-if="sessionIsMade == null || cartIsEmpty === true" />

      <div v-else class="flex flex-col-reverse items-start justify-around overflow-visible transition-all duration-300 md:flex-row">

        <div v-if="order !== null" class="w-full max-w-2xl p-8 text-gray-800 bg-gray-200 border-b border-indigo-300 rounded shadow-md dark:bg-gray-800 dark:border-gray-900">
          <h2 class="w-full mb-6 text-3xl dark:text-white">Thank you. Your order has been recived.</h2>
          <label for="first-name">Order Number</label>
          <div class="mb-6 text-2xl dark:text-white">{{order.databaseId}}</div>

          <label for="first-name">Total Amount </label>
          <div class="mb-6 text-2xl dark:text-white">{{order.total}}</div>

          <label for="first-name">Payment Method</label>
          <div class="mb-6 text-2xl dark:text-white">{{order.paymentMethodTitle}}</div>

          <g-link to="/all-products" class="inline-block px-4 py-2 mt-8 text-white bg-indigo-500 border-b border-indigo-800 rounded md:px-4 hover:bg-indigo-700">Continue Shopping</g-link>

        </div>

        <form v-else class="flex flex-wrap justify-between w-full max-w-2xl p-8 text-gray-800 bg-gray-200 border-b border-indigo-300 rounded shadow-md dark:bg-gray-800 dark:border-gray-900" @submit.prevent="(billing.paymentMethod == 'stripe') ? payWithStripe() : runCheckout()">
          <h2 class="w-full mb-6 text-3xl dark:text-white">Billing Details</h2>
          <div class="w-1/2 pr-2 mb-3">
            <label for="first-name">First Name</label>
            <input placeholder="John" class="w-full" type="text" name="first-name" id="first-name" required v-model="billing.firstname">
          </div>
          <div class="w-1/2 pl-2 mb-3">
            <label for="last-name">Last Name</label>
            <input placeholder="Doe" class="w-full" type="text" name="last-name" id="last-name" required v-model="billing.lastname">
          </div>
          <div class="w-full mb-3 ">
            <label for=" email">Email</label>
            <input placeholder="johndoe@email.com" class="w-full" type="text" name="email" id="email" required v-model="billing.email">
          </div>
          <span class="w-full mb-3 ">
            <label for="address1">Address Line 1</label>
            <input placeholder="5998 Sunset Blvd" class="w-full" type="text" name="address1" id="address1" required v-model="billing.address1">
          </span>
          <div class="w-full mb-3">
            <label for="address2">Address Line 2</label>
            <input placeholder="Los Angeles" class="w-full" type="text" name="address2" id="address2" required v-model="billing.address2">
          </div>
          <div class="w-1/2 pr-2 mb-3">
            <label for="city">City</label>
            <input placeholder="California" class="w-full" type="text" name="city" id="city" required v-model="billing.city">
          </div>
          <div class="w-1/2 pl-2 mb-3">
            <label for="country">Country</label>
            <CountrySelect :defaultValue="billing.country" class="w-full h-12" v-model="billing.country" />
          </div>

          <div class="mt-4 overflow-hidden bg-white border-b border-indigo-300 divide-x divide-gray-200 rounded-md shadow">

            <label class="h-12 px-5 py-3 m-0 text-base text-gray-600 capitalize hover:bg-gray-100 dark:text-gray-800" for="stripe">
              <input class="mr-2" type="radio" id="stripe" name="paymentmethod" value="stripe" v-model="billing.paymentMethod"> Credit Card</label>

            <label class="h-12 px-5 py-3 m-0 text-base text-gray-600 capitalize hover:bg-gray-100 dark:text-gray-800" for="paypal">
              <input class="mr-2" type="radio" id="paypal" name="paymentmethod" value="paypal" checked v-model="billing.paymentMethod"> PayPal</label>

            <label class="h-12 px-5 py-3 m-0 text-base text-gray-600 capitalize hover:bg-gray-100 dark:text-gray-800" for="cod">
              <input class="mr-2" type="radio" id="cod" name="paymentmethod" value="cod" v-model="billing.paymentMethod"> Cash on delivery</label>

          </div>

          <div class="p-3 mt-4 bg-white border-b border-indigo-300 rounded-md shadow outline-none">
            <card class='w-full stripe-card' stripe='pk_test_PnccujKJJqnELQBTdWpHx5s900OzMpEh6o' :options='{ hidePostalCode: true }' />
          </div>

          <div class="w-full">
            <input value="Checkout" type="submit" class="block w-full h-12 px-4 py-2 mt-8 text-white bg-indigo-500 border-b border-indigo-800 rounded md:px-4 hover:bg-indigo-700">
          </div>

        </form>

        <div class="block w-full p-2 mb-8 md:sticky md:mt-8 md:ml-12 top-8 md:w-96">
          <h2 class="inline-block pb-2 mb-6 text-2xl border-b-2 border-indigo-500">Your Basket</h2>
          <div v-if="cart !== null">
            <ul class="items">
              <li v-for="{node} in cart.cart.contents.edges" :key="node.product.node.id" class="flex items-center mb-4">
                <img class="mr-8 border-2 border-white shadow" width="64" :src="node.product.node.image.sourceUrl">
                <div>
                  <div class="mb-1 text-sm leading-none">{{node.product.node.name}}</div>
                  <div class="text-sm text-indigo-500">{{node.product.node.price}}</div>
                </div>
              </li>
            </ul>

          </div>
          <div v-else>
            <!-- Loading Icon  -->
            <LoadingIcon />
          </div>
        </div>

      </div>

    </div>
  </Layout>
</template>


<script>
import { runMutation } from "../mixins/runMutation";
import LoadingIcon from "../components/UI/LoadingIcon";
import CountrySelect from "../components/UI/CountrySelect";
import getCartQuery from "../gql/queries/getCart.gql";
import EmptyCart from "../components/EmptyCart";
import { Card, createToken, createSource } from "vue-stripe-elements-plus";

export default {
  data() {
    return {
      cart: null,
      sourceId: null,
      billing: {
        country: "IE",
        paymentMethod: "stripe",
      },
      order: null,
    };
  },
  components: {
    LoadingIcon,
    CountrySelect,
    EmptyCart,
    Card,
  },
  mixins: [runMutation],
  methods: {
    async getCartItems() {
      const res = await this.runMutation(getCartQuery);
      this.cart = await res.data.data;
    },
    payWithStripe() {
      createSource({ type: `card` }).then((data) => {
        this.sourceId = data.source.id;
        console.log(this.sourceId);
        this.runCheckout();
      });
    },
    async runCheckout() {
      console.log("runCheckout");
      const res = await this.runMutation(`
      mutation Checkout {
        checkout(input: {
          paymentMethod: "${this.billing.paymentMethod}",
          metaData: {
            key: "_stripe_source_id", value: "${this.sourceId}"
          },
          shippingMethod: "Flat rate",
          billing: {
            address1: "${this.billing.address1}", 
            address2: "${this.billing.address2}", 
            city: "${this.billing.city}", 
            country: ${this.billing.country}, 
            email: "${this.billing.email}", 
            firstName: "${this.billing.firstname}", 
            lastName: "${this.billing.lastname}", 
            phone: "0871234567", 
            postcode: "R95P860", 
            state: "Leinster"}
          }) 
          {
          redirect
          order {
            needsPayment
            needsProcessing
            status
            databaseId
            orderKey
            total
            paymentMethodTitle
          }
          result
        }
      }`);
      console.log(res);
      this.order = res.data.data.checkout.order;
      if (
        res.data.data.checkout.order.needsPayment &&
        res.data.data.checkout.redirect
      ) {
        window.location.href = res.data.data.checkout.redirect;
      }
    },
  },
  mounted() {
    this.getCartItems();
  },
  computed: {
    sessionIsMade() {
      if (process.isClient) return localStorage.getItem("woo-session");
    },
    cartIsEmpty() {
      if (process.isClient) return localStorage.getItem("cartIsEmpty");
    },
  },
};
</script>

<style lang="postcss">
input,
textarea,
select {
  @apply border-b p-3 rounded-md outline-none shadow border-indigo-300;
  outline: none !important;
}
label {
  @apply inline-block mb-1  text-xs text-gray-400 uppercase dark:text-gray-300;
}

.stripe-card {
  width: 600px;
}
</style>