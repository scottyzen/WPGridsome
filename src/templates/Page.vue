<template>
  <Layout>
    <h1 class="text-4xl text-center text-gray-800">
      {{ $page.page.title }}
    </h1>
    <div class="content" v-html="$page.page.content"></div>
  </Layout>
</template>

<page-query>
query Page ($uri: ID!){
  page(idType: URI, id: $uri) {
    title
    content
  }
}
</page-query>

