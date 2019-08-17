<template>
  <Layout>
    <transition name="fade" appear>
      <div class="twitter"></div>
    </transition>
  </Layout>
</template>

<script>
export default {
  name: "Index",
  metaInfo: {
    title: "The work of Thomas Cober"
  },
  computed: {
    posts() {
      return this.$page ? this.$page.allWordpressPost : null;
    }
  }
};
</script>

<style>
.fade-enter-active {
  transition: opacity 0.1s;
}

.fade-enter {
  opacity: 0;
}
</style>

