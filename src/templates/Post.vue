<template>
  <Layout>
    <div class="flex flex-wrap -mt-10">
      <!-- BLOG CONTENT  -->
      <div class="flex-1 content ">
        <div
          class="h-64 mb-12 bg-center bg-cover featured-image"
          :style="{
            backgroundImage: `url(${$page.post.featuredImage.mediaItemUrl})`,
          }"
        ></div>

        <h1 class="text-4xl text-center text-gray-800">
          {{ $page.post.title }}
        </h1>
        <div
          class="max-w-2xl m-auto mt-8 font-light text-gray-700 post-content"
          v-html="$page.post.content"
        ></div>
      </div>

      <!-- SIDEBAR  -->
      <div class="w-full max-w-sm -mb-12 bg-gray-900 sidebar">
        <div class="sticky top-0 p-12 overflow-scroll">
          <div class="text-orange-400 uppercasse">RECENT ARTICLES</div>
          <ul>
            <li
              class="mt-8"
              v-for="post in $page.posts.edges"
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
                  >by {{ post.node.author.name }} | {{ post.node.date }}</span
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($databaseId: ID!){
  post(idType: DATABASE_ID, id: $databaseId) {
    databaseId
    title
    content
    featuredImage {
      mediaItemUrl
      mediaDetails {
        sizes {
          width
          sourceUrl
        }
      }
    }
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
          name
        }
      }
    }
  }
}
</page-query>

<style lang="postcss">
.post-content {
  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    @apply mt-4 mb-2 leading-none text-gray-800 font-medium;
  }

  & h1 {
    @apply text-2xl;
  }

  & h2 {
    @apply text-xl;
  }

  & h3 {
    @apply text-lg;
  }

  & ol {
    list-style: disc;
    list-style-position: inside;
    @apply my-4;
  }

  & ul {
    list-style: decimal;
    list-style-position: inside;
    @apply my-4;
  }

  & hr {
    @apply my-8;
  }

  & img {
    width: 125%;
    max-width: unset;
    margin: 20px;
    margin-left: -12.5%;
  }
}
.sidebar {
  & p {
    font-size: 14px;
  }
}

.sidebar .active-blog {
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
