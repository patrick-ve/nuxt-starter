<i18n>
{
  "en": {
    "404": "This page does not exist. You will be redirected to the home page shortly.",
    "error": "An error occured. You will be redirected to the home page shortly."
  },
  "nl": {
    "404": "Deze pagina bestaat niet. U wordt omgeleid naar de homepage.",
    "error": "Er is een fout opgetreden. U wordt omgeleid naar de homepage."
  }
}
</i18n>

<template>
  <div>
    <h1>{{ $t$(`${errorMessage}`) }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    }
  },

  head() {
    return {
      title: `${this.error.statusCode === 404 ? '404' : 'Error'}`,
    };
  },

  computed: {
    errorMessage() {
      return this.error.statusCode === 404 ? '404' : 'error';
    }
  },

  mounted() {
    setTimeout(() => {
      this.$router.push('/');
    }, 3000);
  }
};
</script>