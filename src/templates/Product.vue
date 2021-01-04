<template>
  <Layout>
    <div class="container">
      <div class="grid grid-cols-2 gap-8 ">
        <div>
          <g-image class="rounded shadow-custom" :src="$page.product.featuredImage.node.sourceUrl"></g-image>
        </div>
        <div class="p-4">
          <h2 class="mb-4 text-3xl font-medium">{{$page.product.name}}</h2>
          <div class="mb-4 text-lg text-indigo-500 dark:text-indigo-300">{{$page.product.price}}</div>
          <p class="mb-8 font-light">{{$page.product.shortDescription}}</p>

          <AddToCart :productId="this.$context.databaseId" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Products ($databaseId: ID!){
  product(idType: DATABASE_ID, id: $databaseId) {
    name
    slug
    ... on WordPress_SimpleProduct {
      id
      name
      description(format: RAW)
      shortDescription(format: RAW)
      price
      featuredImage {
        node {
          sourceUrl(size: LARGE)
        }
      }
    }
  }
}

</page-query>

<script>
import { runMutation } from "../mixins/runMutation";
import AddToCart from "../components/UI/AddToCart";

export default {
  mixins: [runMutation],
  components: {
    AddToCart,
  },
  methods: {
    async addToCart() {
      const res = await this.runMutation(`mutation {
  addToCart(input: {productId: 89}) {
    cartItem {
      total
      quantity
    }
  }
}
`);
      console.log(res);
    },
  },
};
</script>

