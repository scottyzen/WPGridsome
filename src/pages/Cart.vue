<template>
  <Layout class="shape">
    <div class="container">
      <PageTitle title="Cart" />

      <div class="flex justify-center overflow-visible">

        <div class="px-8 py-4 bg-white border-b border-indigo-200 shadow-lg dark:bg-gray-700 dark:border-gray-800" style="width: 800px">
          <div v-if="cart !== null">
            <!-- <pre>{{cart}}</pre> -->
            <ul class="divide-y divide-indigo-50 dark:divide-gray-800 items">
              <li v-for="{node} in cart.contents.edges" :key="node.product.node.id" class="flex items-center py-4">
                <img class="mr-8 border-2 border-white shadow dark:border-gray-700" width="64" :src="node.product.node.image.sourceUrl">
                <div class="flex justify-between w-full">
                  <div>
                    {{node.product.node.name}}
                    <div class="text-sm text-indigo-500 dark:text-indigo-300">{{node.product.node.price}}</div>
                  </div>
                  <input class="w-20 px-3 border border-indigo-100 rounded dark:border-gray-900 dark:bg-gray-800" type="number" name="" @change="updateQuantity(node.key, $event)" :value="node.quantity">
                </div>
              </li>
              <li class="flex items-center justify-between pt-6 pb-4">
                <div class="text-lg">

                  <span class="font-medium ">Total: </span>
                  <span class="totalAmount" :class="{'up': increasedTotal === true, 'down': increasedTotal === false}">{{totalAmount}}</span>
                </div>
                <g-link to="/checkout" class="p-2 px-3 text-white bg-indigo-500 rounded">Go to Checkout</g-link>
              </li>
            </ul>

          </div>
          <div v-else class="flex items-center justify-center">
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
import getCartQuery from "../gql/queries/getCart.gql";

export default {
  data() {
    return {
      cart: null,
      totalAmount: "",
      increasedTotal: null,
    };
  },
  components: {
    LoadingIcon,
  },
  mixins: [runMutation],
  methods: {
    async getCartItems() {
      const res = await this.runMutation(getCartMutation);
      this.cart = await res.data.data.cart;
      this.totalAmount = await res.data.data.cart.total;
    },
    async updateQuantity(data, e) {
      this.increasedTotal = "updating";
      const res = await this.runMutation(`mutation UpDateCartQuantity {
        updateItemQuantities(input: {items: {key: "${data}", quantity: ${e.target.value}}}) {
          cart {
            total
            contents {
              itemCount
              edges {
                node {
                  quantity
                  key
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
                }
              }
            }
          }
        }
      }`);
      this.cart = await res.data.data.updateItemQuantities.cart;
      this.totalAmount = await res.data.data.updateItemQuantities.cart.total;
    },
  },
  mounted() {
    this.getCartItems();
  },
  watch: {
    totalAmount(newTotal, oldTotal) {
      this.increasedTotal = newTotal > oldTotal ? true : false;
    },
  },
};
</script>

<style lang="postcss">
.totalAmount {
  @apply text-indigo-500 dark:text-indigo-300;
  display: inline-block;
}
.up {
  animation: up 900ms ease forwards;
}
@keyframes up {
  0% {
    @apply text-green-500;
  }
}

.down {
  animation: down 900ms ease forwards;
}
@keyframes down {
  0% {
    @apply text-red-500;
  }
}
</style>