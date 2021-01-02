<template>
  <Layout>
    <div class="container">
      <PageTitle :title="$page.product.name" :subTitle="$page.product.price" />
      <div class="grid grid-cols-2 gap-8">
        <div>
          <g-image :src="$page.product.featuredImage.node.sourceUrl"></g-image>
        </div>
        <div>
          <h2 class="mb-4 text-3xl font-medium">{{$page.product.name}}</h2>
          <p class="mb-8 font-light">{{$page.product.shortDescription}}</p>
          <button @click="addToCart" class="inline-block px-3 py-2 text-white bg-indigo-500 rounded md:w-auto md:px-4 hover:bg-indigo-700">Add to cart</button>
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

export default {
  mixins: [runMutation],
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

