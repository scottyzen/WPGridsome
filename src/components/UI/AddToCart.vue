<template>
  <button @click="(added !== true) ? addToCart(): null" :class="{'added': added === true, 'loading': added == 'loading'}" class="p-1 px-3 text-white bg-indigo-500 rounded">
    <span v-if="added !== true">Add to cart</span>
    <span v-else>
      <g-link to="/cart">View Cart</g-link>
    </span>
    <span class="icon"></span>
  </button>
</template>

<script>
import { runMutation } from "../../mixins/runMutation";
export default {
  props: ["productId"],
  mixins: [runMutation],
  data() {
    return { added: null };
  },
  methods: {
    async addToCart() {
      this.added = "loading";
      const res = await this.runMutation(`
        mutation addToCart {
            addToCart(input: {productId: ${this.productId}, quantity: 1}) {
                cart {
                total
                isEmpty
                contents {
                        productCount
                        itemCount
                    }
                }
            }
        }`);

      if (res.session) {
        if (localStorage.getItem("woo-session") !== res.session) {
          localStorage.setItem("woo-session", res.session);
        }
      }

      if (res.data.data.addToCart) {
        this.added = !res.data.data.addToCart.cart.isEmpty;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.added {
  @apply bg-green-500;
}
span.icon {
  display: inline-block;
  width: 6px;
  height: 12px;
  transform: rotate(0) scale(0);
  max-width: 0;
}
.loading span.icon {
  border: 2px solid #fff;
  border-top: 2px solid transparent;
  border-radius: 100%;
  margin-left: 10px;
  width: 12px;
  height: 12px;
  animation: spin 600ms infinite forwards linear;
  max-width: 200px;
  transform: scale(1);
}
.added span.icon {
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  margin-left: 10px;
  transform: rotate(45deg) scale(1);
  max-width: 200px;
  transition: all 150ms ease-in;
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(359deg);
  }
}
</style>