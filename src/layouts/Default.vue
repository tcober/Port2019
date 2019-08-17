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
      <div class="menu">
        <g-link to="/work" class="design button text">WORK</g-link>

        <div class="music button text">MUSIC</div>

        <a class="code button text" href="https://github.com/tcober" target="_blank">CODE</a>
      </div>
    </div>
  </div>
</template>

<script>
import BackgroundSvg from "@/components/BackgroundSvg.vue";
export default {
  name: "Layout",
  components: { BackgroundSvg }
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
</style>
