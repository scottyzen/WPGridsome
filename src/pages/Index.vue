<template>
  <Layout class="shape">
    <div class="container text-gray-800">
      <div
        class="flex flex-col items-center justify-center mb-24 md:mb-48 text-center"
      >
        <h1 class="text-3xl md:text-6xl font-bold">WPGridsome</h1>
        <h2 class="text-xl text-gray-700">A WordPress starter for Gridsome</h2>
      </div>

      <div class="bg-white p-4 md:p-12">
        <h2 class="text-2xl font-bold mb-12">WordPress Setup</h2>
        <h3 class="text-lg mb-2 font-bold">Plugins</h3>
        <ul class=" list-disc list-inside mb-12">
          <li>
            WP GraphQL (
            <a
              class="text-indigo-600"
              href="https://github.com/wp-graphql/wp-graphql"
              target="_blank"
              >Githib</a
            >)
          </li>
          <li>
            WPGraphQL for Advanced Custom Fields (
            <a
              class="text-indigo-600"
              href="https://github.com/wp-graphql/wp-graphql-acf"
              target="_blank"
              >Githib</a
            >)
          </li>
          <li>
            WPGraphQL Offset Pagination (
            <a
              class="text-indigo-600"
              href="https://github.com/valu-digital/wp-graphql-offset-pagination"
              target="_blank"
              >Githib</a
            >)
          </li>
          <li>
            WPGraphQL Yoast SEO Addon (
            <a
              class="text-indigo-600"
              href="https://github.com/ashhitch/wp-graphql-yoast-seo"
              target="_blank"
              >Githib</a
            >) (
            <a
              class="text-indigo-600"
              href="https://wordpress.org/plugins/add-wpgraphql-seo/"
              target="_blank"
              >Plugin</a
            >)
          </li>
        </ul>
        <h3 class="text-lg mb-2 font-bold">
          WordPress Snippits (functions.php)
        </h3>
        <div class="column-2">
          <div>
            <p class="text-sm mb-2">
              Increase the maxium number of results returned. Default (100)
            </p>
            <vue-code-highlight
              ><pre>
add_filter('graphql_connection_max_query_amount', function () {
    return 1000;
});</pre
              ></vue-code-highlight
            >
          </div>
          <div>
            <p class="text-sm mb-2">
              Sets the number of posts returned to be the same as WordPress's
              posts per page
            </p>

            <vue-code-highlight>
              <pre>
add_filter('graphql_post_object_connection_query_args', function ($query_args, $source, $args, $context, $info) {

    // Set in Settings > Reading
    $default_posts_per_page = get_option('posts_per_page');

    if (!isset($args['first']) && !isset($args['last'])) {
        $query_args['posts_per_page'] = $default_posts_per_page;
    }
    
    return $query_args;
}, 10, 5);</pre
              >
            </vue-code-highlight>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { component as VueCodeHighlight } from "vue-code-highlight";
export default {
  components: {
    VueCodeHighlight,
  },
};
</script>

<style>
@media screen and (min-width: 1025px) {
  .column-2 {
    column-count: 2;
    column-gap: 2rem;
  }
}
.column-2 > div {
  break-inside: avoid-column;
}

/* Code blocks */
pre {
  font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New",
    monospace;
  background-color: rgba(45, 55, 72, 1);
  border-radius: 0.25rem;
  font-size: 0.75rem;
  padding: 1rem;
  color: rgba(255, 255, 255, 1);
  white-space: pre-wrap;
  margin-bottom: 2rem;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}

.token.punctuation {
  color: #f8f8f2;
}

.namespace {
  opacity: 0.7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
  color: #f92672;
}

.token.boolean,
.token.number {
  color: #ae81ff;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #a6e22e;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
  color: #f8f8f2;
}

.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
  color: #e6db74;
}

.token.keyword {
  color: #66d9ef;
}

.token.regex,
.token.important {
  color: #fd971f;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}
</style>
