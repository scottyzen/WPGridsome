<template>
  <div class="flex flex-col">
    <!-- HEADER  -->
    <header class="sticky inset-x-0 top-0 z-10 bg-white border-b">
      <div class="container flex items-center justify-between">
        <g-link class="font-bold" to="/">{{
          $static.metadata.siteName
        }}</g-link>
        <Nav />
      </div>
    </header>

    <!-- CONTENT  -->
    <div class="flex-1 bg-red">
      <div class="flex flex-wrap">
        <div class="flex-1">
          <slot />
        </div>
        <!-- SIDEBAR  -->
        <div class="w-full max-w-sm bg-gray-900 sidebar">
          <div class="p-12">
            <div class="text-orange-400 uppercasse">RECENT ARTICLES</div>
            <ul>
              <li
                class="mt-8"
                v-for="post in $static.posts.edges"
                :key="post.node.databaseId"
                v-bind:class="{
                  'active-blog': post.node.databaseId == $page.post.databaseId,
                }"
              >
                <g-link
                  :to="'/post/' + post.node.slug"
                  class="mb-1 font-serif font-light leading-tight text-gray-400 title"
                >
                  {{ post.node.title }}
                </g-link>
                <div
                  class="font-light text-gray-600 excerpt"
                  v-html="post.node.excerpt.substring(0, 80) + '...'"
                ></div>
                <div>
                  <span
                    class="font-serif text-xs italic text-gray-600 author-and-date"
                    >by {{ post.node.author.node.name }} |
                    {{ post.node.date }}</span
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER  -->
    <footer class="font-light text-white bg-gray-700">
      <p class="p-4 text-sm text-center bg-gray-800">
        © 2020 WPGrdisome.com by
        <a
          href="https://scottyzen.com?ref=wpgridsome"
          target="_blank"
          rel="noopener"
          class="text-yellow-500"
          >Scott Kennedy</a
        >
      </p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }

  posts (first: 6) {
    edges {
      node {
        databaseId
        slug
        title
        excerpt
        date
        author {
          node{
            name
          }
        }
      }
    }
  }
}
</static-query>

<script>
import Nav from "../components/Nav";
export default {
  components: {
    Nav,
  },
};
</script>

<style lang="postcss">
a,
button {
  cursor: pointer;
  outline: none !important;
}

.sidebar .active-blog {
  /*! purgecss ignore current */
  & .title {
    @apply text-orange-400 relative;

    &:before {
      @apply bg-orange-400 rounded-full;
      content: "";
      width: 6px;
      height: 6px;
      position: absolute;
      left: -24px;
      top: 6px;
    }

    &:after {
      @apply border border-gray-700 rounded-full;
      content: "";
      width: 24px;
      height: 24px;
      position: absolute;
      left: -33px;
      top: -3px;
    }
  }

  & .excerpt {
    @apply text-gray-300;
  }

  & .author-and-date {
    @apply text-gray-300;
  }
}
</style>
