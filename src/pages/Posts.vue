<template>
  <Layout class="shape">
    <div class="container pt-32">
      <div class="grid grid-cols-2 mb-12">
        <div class="pr-12 py-12">
          <div class="mb-2 text-indigo-500">
            {{ $page.posts.edges[0].node.categories.edges[0].node.name }}
          </div>
          <h2
            class="text-gray-800 text-4xl font-bold leading-none mb-4"
            v-html="$page.posts.edges[0].node.title"
          ></h2>
          <p
            class="mb-8 text-justify leading-normal text-gray-600 max-w-lg"
            v-html="$page.posts.edges[0].node.excerpt"
          ></p>
          <g-link
            :to="`/post/${$page.posts.edges[0].node.slug}`"
            class="button bg-indigo-600 hover:bg-white hover:bg-indigo-500 text-white py-3 px-8 rounded"
            >Read More</g-link
          >
        </div>
        <div>
          <g-image
            v-if="$page.posts.edges[0].node.featuredImage"
            :src="$page.posts.edges[0].node.featuredImage.sourceUrl"
            class=" object-cover w-full shadow-lg rounded-lg"
          ></g-image>
          <g-image
            v-else
            src="~/assets/images/no-img-found.jpg"
            class=" object-cover w-full shadow-lg rounded-lg"
          ></g-image>
        </div>
      </div>

      <ul class="grid grid-cols-3 gap-16 py-12">
        <li
          v-for="{ node } in $page.posts.edges.slice(1)"
          :key="node.id"
          class="rounded-md shadow-lg"
        >
          <a :href="`/post/${node.slug}`">
            <g-image
              v-if="node.featuredImage"
              :src="node.featuredImage.sourceUrl"
              class="h-200 object-cover w-full rounded-t-md"
            ></g-image>
            <g-image
              v-else
              src="~/assets/images/no-img-found.jpg"
              class="h-200 object-cover w-full rounded-t-md"
            ></g-image>

            <div class="py-2 px-4 pb-8">
              <span
                v-if="node.categories.edges[0]"
                class="text-indigo-500 text-sm"
                v-html="node.categories.edges[0].node.name"
              ></span>
              <h2 class="text-gray-800">{{ node.title }}</h2>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts(first: 10) {
    edges {
      node {
        title
        slug
        id
        categories {
          edges {
            node {
              name
            }
          }
        }
        excerpt(format: RENDERED)
        featuredImage {
          sourceUrl(size: MEDIUM_LARGE)
        }
      }
    }
  }
}

</page-query>

<style>
.shape {
  background: url("../../src/assets/images/shape.svg") no-repeat;
  background-size: contain;
}
.h-200 {
  height: 200px;
}
.read-more {
  display: none;
}
.button {
  transition: all 200ms ease-out, background-color 100ms ease-out;
  display: inline-block;
}
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px -2px rgba(0, 0, 0, 0.25);
}
.button:active {
  transform: translateY(-1px);
  box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.25);
}
</style>
