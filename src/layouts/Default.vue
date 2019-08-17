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
        <h1>THOMAS&nbsp;COBER</h1>
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
      if (this.$route.path == "/music") {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}

img {
  max-width: 100%;
}

nav[role="navigation"] {
  text-align: center;
}
nav[role="navigation"] a {
  display: inline-block;
  margin: 1em 0.75em 2em;
}

.layout {
  max-width: 600px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.nav__link {
  margin-left: 20px;
}
.post-list {
  list-style: none;
  padding-left: 0;
}
.post-list li {
  padding: 1em 0;
}

.fade-enter-active {
  transition: opacity 0.1s;
}

.fade-enter {
  opacity: 0;
}
</style>
