<template>
  <Layout>
    <h1>{{ $page.blog.title }}</h1>
  </Layout>
</template>

<script>
export default {
  name: "BlogPost",
  metaInfo() {
    return {
      title: "Yo",
    };
  },
};
</script>

<page-query>
  query Blog ($path: String!) {
    blog: wordPressBlog (path: $path) {
      title
      content
    }
  }
  </page-query>

<style>
h1 {
  color: red;
}
</style>
