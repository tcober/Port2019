<template>
  <Layout>
    <h1>Category: {{ $page.wordPressCategory.title }}</h1>
    <ul class="post-list">
      <li v-for="{ node } in $page.wordPressCategory.belongsTo.edges" :key="node.id">
        <Post :post="node" />
      </li>
    </ul>
    <Pager :info="$page.wordPressCategory.belongsTo.pageInfo" />
  </Layout>
</template>


<script>
import { Pager } from "gridsome";
import Post from "~/components/Post.vue";

export default {
  components: {
    Pager,
    Post
  },
  metaInfo() {
    return {
      title: this.$page.wordPressCategory.title
    };
  }
};
</script>
