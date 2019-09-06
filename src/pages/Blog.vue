<template>
  <Layout>
    <transition name="fade" appear>
      <div class="worklist">
        <ul>
          <li v-for="name in $page.posts.edges" :key="name.node.id">
            <g-link :to="`blog/${name.node.id}`" class="loader">{{name.node.title}}</g-link>
          </li>
        </ul>
      </div>
    </transition>
  </Layout>
</template>

<script>
export default {
  name: "BlogNav",
  metaInfo: {
    title: "Work"
  }
};
</script>

<page-query>
query {
  posts: allWordPressBlog {
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