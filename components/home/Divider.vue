<template>
  <section 
    class="relative w-screen h-full opacity-0 section md:flex"
    :class="{ 'reversed': reversed }"
    :style="`background-color: ${backgroundColor};`"
  >
    <div
      class="relative w-full left h-96 md:w-30vw md:h-full"
      :class="{ 'panel-left reversed': reversed }"
    >
      <slot name="content-left"></slot>
      <good-image
        v-if="imageLeft"
        :src="imageLeft.src"
        :alt="imageLeft.altText || ''"
        class="absolute top-0 left-0 z-10"
      />
    </div>
    <div
      class="relative w-full h-96 md:w-70vw md:h-full"
      :class="{ 'panel-right reversed': reversed }"
      :style="`background-color: ${backgroundColor};`"
    >
      <slot></slot>
      <good-image
        v-if="imageRight"
        :src="imageRight.src"
        :alt="imageRight.altText || ''"
        class="absolute top-0 left-0 z-20"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    reversed: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: '#000'
    },
    imageLeft: {
      type: Object,
      default: null
    },
    imageRight: {
      type: Object,
      default: null
    },
  },

  mounted() {
    this.scrollAnimationHandler();
  },

  methods: {
    scrollAnimationHandler() {
      this.$gsap.effects.scrollAnimation(this.$el);
    }
  },
};
</script>