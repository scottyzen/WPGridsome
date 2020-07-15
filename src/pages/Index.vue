<template>
  <Layout>
    <g-image
      src="~/assets/images/jesse-gardner-45qGrlP-aBY-unsplash.jpg"
      class="hero-image"
      :style="{ transform: `scale(clamp(1, ${scroolpos + 1}, 1.1))` }"
    ></g-image>

    <div class="container min-h-screen">
      <div class="flex flex-col items-center justify-center p-8 mt-12">
        <h1 class="font-bold text-gray-800 text-7xl">
          WPGridsome
        </h1>
        <h2 class="text-xl text-gray-700">A WordPress starter for Gridsome</h2>
      </div>
    </div>

    <div class="container -mt-48 bg-white">
      <div class="p-12 text-gray-800 prose-sm">
        <h2>How to get started</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos veniam
          suscipit aliquid sit quam, unde pariatur totam? Ab quasi corrupti
          aperiam, sed cum accusantium officia debitis distinctio autem non.
          Nam, optio porro? Corporis quae ullam voluptatem eveniet magni,
          nesciunt hic harum voluptatibus, sit nobis, dolore omnis eum
          dignissimos ratione dolores similique fugit maiores quasi. Reiciendis
          veniam error facere quam rerum atque voluptatum praesentium maxime
          illum eum doloribus doloremque, aliquid deserunt corrupti quas sint.
          Laudantium, aspernatur ullam! Excepturi, alias, eos assumenda quisquam
          qui cumque fugit ab facere in placeat amet ea totam non voluptatem
          corporis delectus natus dignissimos numquam debitis corrupti molestias
          aspernatur! Cumque nam natus, necessitatibus soluta laudantium beatae
          tempora distinctio velit. Minima unde harum, aut excepturi
          consequuntur, nemo beatae in quia enim deleniti maiores, perferendis
          iusto nesciunt ut vitae delectus eveniet porro? Modi accusantium
          aspernatur, saepe nemo quasi aut accusamus molestiae! Tempore dolorum
          iste quis beatae, magni neque id repellat veritatis, nostrum rerum,
          eaque culpa voluptatum consequatur excepturi rem eum. Veniam tempore
          id corporis similique officiis sed cumque nulla odit modi dolores
          optio, harum saepe magni labore autem accusantium nobis perspiciatis
          obcaecati, placeat dignissimos iusto dicta, aliquid quaerat! Placeat
          voluptatum dolores amet odit, architecto, laudantium laboriosam
          adipisci unde dolor tenetur quaerat eum alias voluptas modi quidem
          blanditiis consequatur ab ullam. Eligendi amet autem omnis
          consequuntur maxime itaque laborum, architecto voluptatem optio nisi
          veniam ipsam nobis officiis illo obcaecati! Totam enim aperiam nam
          quae in quam eveniet? Nisi odit perspiciatis optio corrupti, cum
          voluptatibus veritatis quod recusandae distinctio quia maiores illo
          deserunt iusto. Voluptatibus consequuntur iste distinctio expedita
          quibusdam officiis excepturi non ad molestias, ullam accusamus
          dolores, corrupti repudiandae qui, saepe autem nemo inventore dicta!
          Et delectus laboriosam doloremque est labore voluptas voluptates atque
          ratione quia excepturi illo distinctio tempore dolorem ut iure
          dignissimos, quis quas consequatur voluptate tenetur nesciunt?
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      scroolpos: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      if (window.scrollY < 500) this.scroolpos = window.scrollY * 0.0005;
    },
  },
};
</script>

<style scoped>
.hero-image {
  z-index: -1;
  position: absolute;
  width: 100%;
  transform-origin: top;
}
.text-7xl {
  font-size: 5rem;
}
</style>
