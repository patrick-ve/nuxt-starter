<i18n>
{
  "en": {
    "navbar": {
      "home": "Home",
      "about": "About us"
    }
  },
  "nl": {
    "navbar": {
      "home": "Home",
      "about": "Over ons"
    }
  }
}
</i18n>

<template>
  <div class="relative z-50">
    <div class="fixed z-40 right-6 top-6 lg:hidden">
      <burger-button
        :active="hamburgerMenuActive"
        :bar-color="hamburgerMenuActive ? '#fff' : '#231f20'"
        :bar-height="5"
        :bar-width="30"
        @click="hamburgerMenuActive = !hamburgerMenuActive"
      />
    </div>

    <transition name="fade">
      <nav
        v-if="hamburgerMenuActive"
        class="fixed z-30 grid w-screen h-screen bg-orange place-items-center"
      >
        <ul class="flex flex-col w-full h-2/3 justify-evenly">
          <li>
            <nuxt-link to="/" class="grid w-1/3 h-auto mx-auto mb-4 place-items-center">
              <img src="" alt="Logo" />
            </nuxt-link>
          </li>
          <li
            v-for="(route, index) in routes"
            :key="`router-link-${route}`"
            class="mx-auto font-semibold text-white uppercase"
          >
            <nuxt-link :to="`${routes[index]}`">
              {{ $t(`navbar.${route}`) }}
            </nuxt-link>
          </li>
          <li class="grid text-white place-items-center">
            <language-selector />
          </li>
        </ul>
      </nav>
    </transition>

    <nav 
      class="fixed z-50 hidden w-screen h-36 lg:flex"
      :class="{ 'show-background': hasScrolled }"
    >
      <div class="grid w-1/5 h-auto px-24 place-items-center">
        <nuxt-link to="/" class="grid w-full h-auto lg:text-base xl:text-xl place-items-center">
          <img src="/images/result-logo-white.svg" alt="Logo Result Recruitment">
        </nuxt-link>
      </div>
      <ul class="flex items-center justify-between h-full lg:w-4/5 xl:w-3/5">
        <li
          v-for="(route, index) in routes"
          :key="`router-link-${route}`"
          class="font-bold text-white uppercase"
        >
          <nuxt-link
            class="lg:text-xs 2xl:text-base"
            :to="`${routes[index]}`"
          >
            {{ $t(`navbar.${route}`) }}
          </nuxt-link>
        </li>
      </ul>
      <div class="grid w-1/5 h-auto px-24 font-semibold text-white uppercase place-items-center font-xl">
        <language-selector />
      </div>
    </nav>
  </div>
</template>

<script>
import LanguageSelector from './LanguageSelector.vue';
const OFFSET = 60;

export default {
  components: { LanguageSelector },
  data() {
    return {
      routes: ['/', 'about'],
      showNavbar: true,
      hasScrolled: false,
      lastScrollPosition: 0,
      scrollValue: 0,
      hamburgerMenuActive: false
    };
  },

  watch:{
    $route (to, from){
      this.hamburgerMenuActive = false;
    }
},

  mounted () {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', this.onScroll);
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll);
  },

  methods: {
    onScroll () {
      if (window.pageYOffset < 0 || this.hasScrolled) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
      this.hasScrolled = true;
    }
  } 
};
</script>

<style lang="postcss" scoped>
.show-background {
  @apply bg-orange duration-500 ease-in h-24;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>