<template>
  <Layout>
    <div class="worklist">
      <ul>
        <li v-for="name in $page.posts.edges" :key="name.node.id">
          <g-link :to="`/work/${name.node.slug}`" class="loader">{{name.node.title}}</g-link>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "WorkNav",
  metaInfo: {
    title: "Thomas Cober's Old Web Work"
  }
};
</script>

<page-query>
query {
  posts: allWordPressPost(order: ASC) {
    edges {
      node {
        id
        title
        path
        slug
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

.worklist {
  height: auto;
  width: 322px;
  position: relative;
  float: left;
  margin-top: 130px;
  padding: 10px;
  border: 4px solid black;
  background-color: $color2;

  .loader {
    cursor: pointer;
  }

  ul {
    font-family: $body;

    li {
      margin: 20px 0;
      font-size: $bodyFontSize;
    }
  }

  @include respond-to("medium") {
    float: none;
    margin: 20px auto 20px;
  }
}
</style>