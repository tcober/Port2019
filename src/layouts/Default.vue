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
      <div v-if="showMenu" class="menu">
        <g-link to="/work" class="design button text">WORK</g-link>

        <g-link to="/music" class="music button text">MUSIC</g-link>

        <a class="code button text" href="https://github.com/tcober" target="_blank">CODE</a>
      </div>
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
      if (this.$route.path == "/music" || this.$route.params.slug) {
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

.backgroundContain {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: auto;

  svg {
    z-index: 0;
    width: 100%;
  }
}

.container {
  position: relative;
  margin: 8% auto 0px;
  max-width: 1000px;
  width: 80%;
  height: auto;

  @include respond-to("medium") {
    width: 95%;
  }
}

.name {
  z-index: 4;
  width: 290px;
  height: 50px;
  background-color: $color1;
  vertical-align: middle;
  line-height: 48px;
  padding: 0 30px 2px;

  h1 {
    width: 215px;
    display: inline-block;
    letter-spacing: 1.5px;
    font-size: 40px;
    font-family: $header;
    color: $color2;
  }

  a {
    height: 23px;

    img {
      margin: 0 15px 0 5px;
      width: 40px;
      height: auto;
    }
  }

  @include respond-to("medium") {
    margin: 0 auto;
  }
}

.menu {
  position: relative;
  float: right;
  margin-top: 5%;
  z-index: 8;

  .button {
    display: block;
    margin-top: 85px;
    width: 250px;
    height: 40px;
    background-color: $color1;
    text-align: center;
    cursor: pointer;
    position: relative;

    &.text {
      color: $color2;
      vertical-align: middle;
      letter-spacing: 1.5px;
      font-size: 25px;
      font-family: $header;
      line-height: 40px;
    }

    &.active {
      width: 242px;
      height: 32px;
      border: 4px solid black;
      background-color: $color2;
      color: $color1;
      line-height: 32px;
    }
  }

  @include respond-to("medium") {
    float: none;
    width: 250px;
    position: relative;
    margin-bottom: 50px;
    margin: 0px auto 50px;
    z-index: 2;
    & .button {
      margin-top: 20px;
      &:first-child {
        margin-top: 10px;
      }
    }
  }
}
</style>
