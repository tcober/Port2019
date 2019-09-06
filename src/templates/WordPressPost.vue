<template>
  <Layout>
    <h1>{{$page.post.title}}</h1>
  </Layout>
</template>

<script>
export default {
  name: "WorkPost",
  metaInfo() {
    return {
      title: "Yo"
    };
  }
};
</script>

<page-query>
query Post ($path: String!) {
  post: wordPressPost (path: $path) {
    title
    content
    featuredMedia {
      sourceUrl
      altText
      mediaDetails {
        width
      }
    }
    categories {
      id
      title
      path
    }
    tags {
      id
      title
      path
    }
  }
}
</page-query>

<style>
h1 {
  color: red;
}
</style>