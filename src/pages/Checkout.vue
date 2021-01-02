<template>
  <Layout class="shape">
    <div class="container">
      <PageTitle title="Checkout" />

      <div class="flex items-start justify-around overflow-visible">
        <form class="flex flex-wrap justify-between w-full max-w-2xl p-8 bg-indigo-400 border-b border-indigo-300 rounded shadow-md dark:bg-gray-800 dark:border-gray-900 ">
          <h2 class="mb-6 text-3xl text-white">Billing Details</h2>

          <span class="w-full mb-3 ">
            <label for="address1">Address Line 1</label>
            <input placeholder="5998 Sunset Blvd" class="w-full" type="text" name="address1" id="address1" required>
          </span>
          <div class="w-full mb-3">
            <label for="address2">Address Line 2</label>
            <input placeholder="Los Angeles" class="w-full" type="text" name="address2" id="address2" required>
          </div>
          <div class="w-1/2 pr-2 mb-3">
            <label for="city">City</label>
            <input placeholder="California" class="w-full" type="text" name="city" id="city" required>
          </div>
          <div class="w-1/2 pl-2 mb-3">
            <label for="country">Country</label>
            <input placeholder="USA" class="w-full" type="text" name="country" id="country" required>
          </div>
          <div class="w-full mb-3">
            <label for="email">Email</label>
            <input placeholder="johndow@email.com" class="w-full" type="text" name="email" id="email" required>
          </div>
          <div class="w-1/2 pr-2 mb-3">
            <label for="first-name">First Name</label>
            <input placeholder="John" class="w-full" type="text" name="first-name" id="first-name" required>
          </div>
          <div class="w-1/2 pl-2 mb-3">
            <label for="last-name">Last Name</label>
            <input placeholder="Doe" class="w-full" type="text" name="last-name" id="last-name" required>
          </div>
        </form>

        <div class="sticky block mt-8 ml-12 top-8 w-96">
          <h2 class="inline-block pb-2 mb-6 text-2xl border-b-2 border-indigo-500">Your Basket</h2>
          <div v-if="cart !== null">
            <ul class="items">
              <li v-for="{node} in cart.cart.contents.edges" :key="node.product.node.id" class="flex items-center mb-4">
                <img class="mr-8 border-2 border-white shadow" width="64" :src="node.product.node.image.sourceUrl">
                <div>
                  <div class="">{{node.product.node.name}}</div>
                  <div class="text-sm text-indigo-500">{{node.product.node.price}}</div>
                </div>
              </li>
            </ul>
            <!-- <pre class="text-xs text-light">{{cart}}</pre> -->

          </div>
          <div v-else>
            <!-- Loading Icon  -->
            <svg class="w-20" version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
              <circle fill="#111" stroke="none" cx="6" cy="50" r="6">
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
              </circle>
              <circle fill="#111" stroke="none" cx="26" cy="50" r="6">
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2" />
              </circle>
              <circle fill="#111" stroke="none" cx="46" cy="50" r="6">
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3" />
              </circle>
            </svg>
          </div>
        </div>

      </div>

    </div>
  </Layout>
</template>


<script>
import { runMutation } from "../mixins/runMutation";

export default {
  data() {
    return {
      cart: null,
    };
  },
  mixins: [runMutation],
  methods: {
    async getCartItems() {
      const res = await this.runMutation(
        `query getcart {
            cart {
                isEmpty
                total
                contents {
                itemCount
                edges {
                    node {
                    product {
                        node {
                        id
                        name
                        image {
                            sourceUrl(size: SHOP_THUMBNAIL)
                        }
                        ... on SimpleProduct {
                            price(format: FORMATTED)
                        }
                        }
                    }
                    total
                    }
                }
                productCount
                }
            }
            }`
      );
      console.log(res);
      this.cart = await res;
    },
  },
  mounted() {
    this.getCartItems();
  },
};
</script>

<style lang="postcss">
input,
textarea {
  @apply border-b p-3 rounded-md outline-none shadow border-indigo-300;
  outline: none !important;
}
label {
  @apply inline-block mb-1  text-xs text-indigo-100 uppercase dark:text-gray-300;
}
</style>