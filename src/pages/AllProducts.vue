<template>
  <Layout class="shape">
    <div class="container">
      <PageTitle title="All Products" />
      <div class="grid grid-cols-1 gap-8 py-12 xl:gap-16 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="{node} in $page.products.edges" :key="node.id">

          <g-link :to="`/product/${node.slug}`" class="block h-full bg-white border-b border-gray-300 rounded-md shadow-lg dark:border-gray-900 dark:bg-gray-800">
            <g-image v-if="node.featuredImage" :src="node.featuredImage.node.sourceUrl" class="object-cover w-full h-200 rounded-t-md"></g-image>
            <g-image v-else src="~/assets/images/no-img-found.jpg" class="object-cover w-full h-200 rounded-t-md"></g-image>

            <div class="flex flex-col p-4">
              <h2 class="mb-2 overflow-scroll leading-tight whitespace-nowrap hide-scrollbar">{{ node.name }}</h2>
              <span class="mb-2 text-lg font-light text-indigo-500 dark:text-yellow-400">{{node.price}}</span>
              <p class="flex-1 mb-3 text-sm font-light leading-tight text-gray-500 dark:text-gray-300" v-html="node.shortDescription.slice(0, 130) + '...'"></p>
            </div>
          </g-link>

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
        shortDescription
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
import PageTitle from "../components/PageTitle";

export default {
  components: {
    PageTitle,
  },
};
</script>

<style>
</style>