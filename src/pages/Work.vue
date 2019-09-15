<template>
  <Layout>
    <transition name="fade" appear>
      <div class="worklist">
        <ul>
          <li v-for="name in $page.posts.edges" :key="name.node.id">
            <g-link :to="`work/${name.node.id}`" class="loader">{{name.node.title}}</g-link>
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
  }
};
</script>

<page-query>
query {
  posts: allWordPressPost {
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

<style lang="scss" scoped>
.loader {
  color: #000;
  &:hover {
    color: $color3;
  }
}

.fade-enter-active {
  transition: all 0.3s;
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}
</style>