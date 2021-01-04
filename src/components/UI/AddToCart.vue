<template>
  <button @click="addToCart" :class="{'added': added}" class="p-1 px-3 text-white bg-indigo-500 rounded">
    <span v-if="!added">Add to cart</span>
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
    return { added: false };
  },
  methods: {
    async addToCart() {
      const res = await this.runMutation(`
        mutation addToCart {
            addToCart(input: {productId: ${this.productId}, quantity: 1}) {
                cart {
                total
                contents {
                        productCount
                        itemCount
                    }
                }
            }
        }`);

      console.log(res.data);

      if (res.session) {
        if (localStorage.getItem("woo-session") !== res.session) {
          localStorage.setItem("woo-session", res.session);
        }
      }

      if (res.data.data.addToCart) {
        this.added = await res.data;
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
  transition: transform 300ms cubic-bezier(0.15, -0.43, 0.47, 1.9),
    max-width 250ms ease, margin 250ms ease;
  display: inline-block;
  width: 6px;
  height: 12px;
  transform: rotate(0) scale(0);
  max-width: 0;
}
.added span.icon {
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  margin-left: 10px;
  transform: rotate(45deg) scale(1);
  max-width: 200px;
}
</style>