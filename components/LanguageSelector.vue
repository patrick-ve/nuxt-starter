<template>
  <div class="divide-x divide-white">
    <nuxt-link
      v-for="locale in $i18n.locales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="px-2 font-bold uppercase lg:text-sm xl:text-base"
    >
      {{ locale.code }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLocale: null,
    };
  },

  watch: {
    '$i18n.locale': {
      immediate: true,
      handler(selectedLocale) {
        this.currentLocale = this.$i18n.locales.find(
          locale => locale.code === selectedLocale
        );
      },
    },
  },
};
</script>