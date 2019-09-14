<template>
  <Layout>
    <div class="container">
      <div class="description">
        <div class="closer">
          <span>X</span>
        </div>
        <div class="blurb">
          <h3>{{$page.post.title}}</h3>
          <p v-html="blurbText"></p>
        </div>
      </div>
      <template v-for="image in images">
        <img class="port-image" :key="image.uid" :src="image.data.url" />
      </template>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "WorkPost",
  metaInfo() {
    return {
      title: "Yo"
    };
  },
  computed: {
    blurbText() {
      let blurb;
      this.$page.post.editorBlocks.forEach(block => {
        if (block.name == "core/paragraph") {
          blurb = block.data.content;
        }
      });
      return blurb;
    },
    images() {
      let images = [];
      this.$page.post.editorBlocks.forEach(block => {
        if (block.name == "core/image") {
          images.push(block);
        }
      });
      return images;
    }
  }
};
</script>

<page-query>
query Post ($path: String!) {
  post: wordPressPost (path: $path) {
    title
    content
    editorBlocks {
      uid
      name
      data {
        content
        dropCap
        bid
        url
        alt
        id
        linkDestination
        caption
      }
    }
    
  }
}
</page-query>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
}

.closer {
  margin-bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: $color1;
  cursor: pointer;
  span {
    color: $color2;
    vertical-align: middle;
    text-align: center;
    font-family: $header;
    line-height: 50px;
  }
}

.description {
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;

  .blurb {
    padding: 15px;
    height: auto;
    border: 4px solid black;
    background-color: $color2;
    margin-top: 50px;
    font-family: $body;
  }

  h3 {
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
  }

  p {
    font-size: $bodyFontSize;
    line-height: 22px;
  }
}

.port-image {
  width: 80%;
  float: right;
}
</style>