<template>
  <div
    class="flex flex-wrap items-center justify-center gap-4  sm:flex-nowrap md:justify-between"
  >
    <div
      class="max-w-sm mb-4"
      v-for="({ logo }, index) in $static.wordPressPage.acf.ourClients"
      :key="index"
    >
      <GImage :src="logo.imageDownloaded" />
    </div>
  </div>
</template>

<static-query>
query {
  wordPressPage(id: "10"){
    title
    acf{
      ourClients{
        logo{
          imageDownloaded(width: 140)
        }
      }
    }
  }
}
</static-query>
