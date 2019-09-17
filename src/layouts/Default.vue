<template>
  <div class="blog home">
    <div class="backgroundContain">
      <background-svg />
    </div>
    <div class="container">
      <div class="name">
        <a href="mailto:tcober5@gmail.com">
          <g-image src="@/assets/mail.svg" width="40" />
        </a>
        <h1>
          <router-link to="/">THOMAS&nbsp;COBER</router-link>
        </h1>
      </div>
      <slot />
      <transition name="fade" appear>
        <div v-if="showMenu" class="menu">
          <g-link to="/work" class="design button text">WORK</g-link>

          <g-link to="/music" class="music button text">MUSIC</g-link>

          <a class="code button text" href="https://github.com/tcober" target="_blank">CODE</a>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import BackgroundSvg from "@/components/BackgroundSvg.vue";
export default {
  name: "Layout",
  components: { BackgroundSvg },
  computed: {
    showMenu() {
      if (this.$route.path == "/music" || this.$route.params.id) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  a {
    color: #fff;
  }
}

.fade-enter-active {
  transition: opacity 0.1s;
}

.fade-enter {
  opacity: 0;
}
</style>
