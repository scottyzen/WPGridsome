<template>
  <Layout class="shape">
    <div class="container text-gray-800">
      <div
        class="flex flex-col items-center justify-center mt-12 mb-48 text-center"
      >
        <h1 class="text-4xl font-bold md:text-6xl">WPGridsome</h1>
        <h2 class="text-xl text-gray-700">A WordPress starter for Gridsome</h2>
      </div>

      <div class="md:bg-white md:p-12">
        <h2 class="mt-2 mb-2 text-xl font-bold text-center md:text-4xl">
          Why Jamstack?
        </h2>
        <div
          class="max-w-lg mx-auto mb-12 leading-tight text-center text-gray-700 md:text-lg"
        >
          A Jamstack architecture can bring all sorts of benefits to the sites
          and to project workflows
        </div>
        <g-image
          class="mb-16 rounded"
          src="~/assets/images/speed.jpg"
          width="1600"
          height="425"
        ></g-image>

        <div class="grid gap-6 md:grid-cols-2">
          <div>
            <h3 class="mb-2 text-lg font-bold">
              Better Performance
              <small
                >(
                <span class="text-indigo-600"
                  ><a
                    href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwpgridsome.com%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    >See Google Speed Test</a
                  ></span
                >
                )</small
              >
            </h3>
            <p class="mb-8">
              Why wait for pages to build on the fly when you can generate them
              at deploy time? When it comes to minimizing the time to first
              byte, nothing beats pre-built files served over a CDN.
            </p>
          </div>
          <div>
            <h3 class="mb-2 text-lg font-bold">Higher Security</h3>
            <p class="mb-8">
              With server-side processes abstracted into microservice APIs,
              surface areas for attacks are reduced. You can also leverage the
              domain expertise of specialist third-party services.
            </p>
          </div>
          <div>
            <h3 class="mb-2 text-lg font-bold">Cheaper, Easier Scaling</h3>
            <p class="mb-8">
              When your deployment amounts to a stack of files that can be
              served anywhere, scaling is a matter of serving those files in
              more places. CDNs are perfect for this, and often include scaling
              in all of their plans.
            </p>
          </div>
          <div>
            <h3 class="mb-2 text-lg font-bold">Better Developer Experience</h3>
            <p class="mb-8">
              Loose coupling and separation of controls allow for more targeted
              development and debugging, and the expanding selection of CMS
              options for site generators remove the need to maintain a separate
              stack for content and marketing.
            </p>
          </div>
        </div>

        <h2 class="mt-20 mb-8 text-2xl font-bold">WordPress Setup</h2>
        <h3 class="mb-2 text-lg font-bold">Plugins</h3>
        <ul class="mb-12 list-disc list-inside">
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

        <h3 class="mb-2 text-lg font-bold">Environment Variables</h3>
        <div>
          <span class="inline-block w-32">GRAPHQL_URL</span>
          <span class="text-indigo-600">https:yourwebsite.com/graphql</span>
        </div>

        <h3 class="mt-12 mb-2 text-lg font-bold">
          WordPress Snippits (functions.php)
        </h3>
        <div class="column-2">
          <div>
            <p class="mb-2 text-sm">
              Increase the maxium number of results returned. Default (100)
            </p>
            <vue-code-highlight>
              <pre>
add_filter('graphql_connection_max_query_amount', function () {
    return 1000;
});</pre
              >
            </vue-code-highlight>
          </div>
          <div>
            <p class="mb-2 text-sm">
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
  overflow: scroll;
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
