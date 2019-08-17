<template>
  <Layout>
    <div class="twitter"></div>
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

