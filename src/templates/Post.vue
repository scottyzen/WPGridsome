<template>
  <Layout>
    <div class="container">
      <h1>{{ $page.post.title }}</h1>
      <div v-html="$page.post.content"></div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($id: ID!){
  post( id: $id){
    id
    title
    content
  }
}
</page-query>

<script>
export default {};
</script>

<style></style>
