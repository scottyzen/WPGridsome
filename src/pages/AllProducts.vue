<template>
  <Layout class="shape">
    <div class="container">
      <PageTitle title="All Products" />
      <div class="grid grid-cols-1 gap-8 py-12 xl:gap-16 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="{node} in $page.products.edges" :key="node.id" class="block bg-white border-b border-gray-300 rounded-md shadow-lg dark:border-gray-900 dark:bg-gray-800">

          <g-link :to="`/product/${node.slug}`">
            <g-image v-if="node.featuredImage" :src="node.featuredImage.node.sourceUrl" class="object-cover w-full h-56 rounded-t-md"></g-image>
            <g-image v-else src="~/assets/images/no-img-found.jpg" class="object-cover w-full h-56 rounded-t-md"></g-image>
          </g-link>

          <div class="flex flex-col items-start p-4">
            <g-link :to="`/product/${node.slug}`">
              <h2 class="mb-2 overflow-scroll leading-tight whitespace-nowrap hide-scrollbar">{{ node.name }}</h2>
            </g-link>
            <span class="mb-2 text-lg font-light text-indigo-500 dark:text-yellow-400">{{node.price}}</span>
            <p class="h-full mb-2 text-sm font-light leading-tight text-gray-500 dark:text-gray-300 line-clamp-3" v-html="node.shortDescription"></p>
            <AddToCart :productId="node.databaseId" />
          </div>

        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query AllProducts {
  products {
    edges {
      node {
        catalogVisibility
        name
        shortDescription(format: RAW)
        slug
        ... on WordPress_SimpleProduct {
          id
          name
          price
          featuredImage {
            node {
              sourceUrl(size: LARGE)
            }
          }
        }
        id
        databaseId
        type
        ... on WordPress_VariableProduct {
          id
          name
          averageRating
          price
        }
        purchasable
      }
    }
  }
}

</page-query>

<script>
import AddToCart from "../components/UI/AddToCart";

export default {
  components: {
    AddToCart,
  },
};
</script>

<style>
.line-clamp-3 {
  --lines: 3;
  --line-height: 1.125rem;
  -webkit-line-clamp: var(--lines);
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  line-height: var(--line-height);
  height: calc(var(--line-height) * var(--lines));
}
</style>