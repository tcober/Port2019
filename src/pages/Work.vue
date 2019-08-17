<template>
  <Layout>
    <transition name="fade" appear>
      <div class="worklist">
        <ul>
          <li v-for="name in $page.allWordPressPost.edges" :key="name.node.id">
            <g-link :to="`${name.node.path}`" class="loader">{{name.node.title}}</g-link>
          </li>
        </ul>
      </div>
    </transition>
  </Layout>
</template>

<script>
export default {
  name: "WorkNav",
  metaInfo: {
    title: "Work"
  },
  computed: {
    names() {
      return this.$page.posts.edges;
    }
  }
};
</script>

<page-query>
query {
  allWordPressPost {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<style>
.fade-enter-active {
  transition: all 0.1s;
  transform: translateY(0px);
}

.fade-enter {
  opacity: 0;
  transform: translateY(20px);
}
</style>