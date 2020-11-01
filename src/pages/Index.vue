<template>
  <Layout class="shape">
    <div class="container text-gray-800">
      <div class="flex flex-col items-center justify-center mb-48">
        <h1 class="text-6xl font-bold">WPGridsome</h1>
        <h2 class="text-xl text-gray-700">A WordPress starter for Gridsome</h2>
      </div>

      <div class="bg-white">
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
        </ul>
        <h3 class="text-lg mb-2 font-bold">
          WordPress Snippits (functions.php)
        </h3>
        <p class="mb-2">
          Increase the maxium number of results returned. Default (100)
        </p>
        <pre
          class=" text-xs bg-indigo-100  font-thin p-4 rounded  whitespace-pre-wrap mb-12"
        >
add_filter('graphql_connection_max_query_amount', function () {
    return 1000;
});
        </pre>
        <p class="mb-2">
          Sets the number of posts returned to be the same as WordPress's posts
          per page found in Settings > Reading
        </p>
        <pre
          class=" text-xs bg-indigo-100  font-thin p-4 rounded  whitespace-pre-wrap mb-12"
        >
add_filter('graphql_post_object_connection_query_args', function ($query_args, $source, $args, $context, $info) {
    $default_posts_per_page = get_option('posts_per_page');

    if (!isset($args['first']) && !isset($args['last'])) {
        $query_args['posts_per_page'] = $default_posts_per_page;
    }
    
    return $query_args;
}, 10, 5);
        </pre>
      </div>
    </div>
  </Layout>
</template>
