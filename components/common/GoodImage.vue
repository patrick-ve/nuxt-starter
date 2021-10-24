<template>
  <div class="w-full h-full">
    <nuxt-img
      :src="src"
      :alt="alt"
      fit="cover"
      class="object-cover w-full h-full"
      sizes="2xl:1200px xl:1000px lg:750px md:600px sm:500px xs:350px"
    ></nuxt-img>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
};
</script>