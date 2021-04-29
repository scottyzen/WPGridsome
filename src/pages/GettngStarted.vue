<template>
  <Layout class="shape">
    <PageTitle title="Setup Guide" class="-mb-6" />
    <div class="max-w-4xl px-4 pt-10 mx-auto my-8">
      <div class="text-center">
        <h2
          class="inline-block my-6 text-2xl font-semibold border-b-2 dark:border-gray-800"
        >
          Download or Clone Repository
        </h2>
        <a
          href="https://github.com/scottyzen/WPGridsome"
          target="_blank"
          rel="nofollow"
          class="relative flex justify-center transition-all duration-150 tool-tip-trigger hover:text-indigo-400"
        >
          https://github.com/scottyzen/WPGridsome</a
        >
      </div>
      <div class="mt-16 text-center">
        <h2
          class="inline-block my-6 text-2xl font-semibold border-b-2 dark:border-gray-800"
        >
          Install required plugins
        </h2>
        <ul class="grid gap-8 mb-8 font-light text-center md:grid-cols-2">
          <li>
            <a
              class="block w-full py-6 transition-all duration-150 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-500 dark:border-gray-900 dark:bg-gray-800 external-link"
              href="https://wordpress.org/plugins/wp-graphql/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WPGraphQL</a
            >
          </li>
          <li>
            <a
              class="block w-full py-6 transition-all duration-150 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-500 dark:border-gray-900 dark:bg-gray-800 external-link"
              href="https://github.com/WP-API/Basic-Auth"
              target="_blank"
              rel="noopener noreferrer"
              >JSON Basic Authentication</a
            >
          </li>
        </ul>
      </div>
      <div class="mt-16 text-center">
        <h2
          class="inline-block my-6 text-2xl font-semibold border-b-2 dark:border-gray-800"
        >
          Set Environment Variables
        </h2>

        <div class="flex mb-2 text-left rounded-md shadow-sm">
          <span
            class="inline-flex items-center w-48 p-4 py-2 text-sm text-gray-500 border border-r-0 border-gray-300 dark:border-gray-900 rounded-l-md bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
            >WORDPRESS_URL</span
          >
          <span
            class="flex-1 block w-full p-4 py-2 bg-white border border-gray-300 rounded-none dark:border-gray-900 dark:bg-gray-800 focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
            >https://example.com</span
          >
        </div>

        <div class="flex mb-2 text-left rounded-md shadow-sm">
          <span
            class="inline-flex items-center w-48 p-4 py-2 text-sm text-gray-500 border border-r-0 border-gray-300 dark:border-gray-900 rounded-l-md bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
            >WP_ADMIN_USERNAME</span
          >
          <span
            class="flex-1 block w-full p-4 py-2 bg-white border border-gray-300 rounded-none dark:border-gray-900 dark:bg-gray-800 focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
            >admin</span
          >
        </div>

        <div class="flex mb-2 text-left rounded-md shadow-sm">
          <span
            class="inline-flex items-center w-48 p-4 py-2 text-sm text-gray-500 border border-r-0 border-gray-300 dark:border-gray-900 rounded-l-md bg-gray-50 dark:bg-gray-700 dark:text-gray-100"
            >WP_ADMIN_PASSWORD</span
          >
          <span
            class="flex-1 block w-full p-4 py-2 bg-white border border-gray-300 rounded-none dark:border-gray-900 dark:bg-gray-800 focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
            >password</span
          >
        </div>
      </div>
    </div>
  </Layout>
</template>

<style>
.external-link:after {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-left: 0.5em;
  margin-bottom: -1px;
  background: url('../assets/images/external-link.svg') no-repeat;
  background-size: contain;
}
.external-link:hover:after,
.dark .external-link:after {
  filter: brightness(0) invert(1);
}
.tool-tip {
  z-index: 5;
  transition: transform 300ms cubic-bezier(0.25, -0.25, 0.37, 1.35),
    opacity 150ms ease;
  opacity: 0;
  transform: translateY(10px);
}
.tool-tip-trigger:hover .tool-tip {
  opacity: 1;
  transform: translateY(0);
}

.tool-tip:after {
  content: '';
  display: block;
  width: 1rem;
  height: 1rem;
  background: #6367f1;
  position: absolute;
  left: calc(50% - 0.5rem);
  bottom: -0.5rem;
  transform: rotate(45deg) scale(0.6);
  z-index: 0;
}
</style>
