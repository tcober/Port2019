<template>
  <Layout>
    <div class="container">
      <div class="description">
        <router-link :style="{opacity: opacity}" class="closer" to="/work">
          <span>X</span>
        </router-link>
        <div class="blurb" :style="{opacity: opacity}">
          <h3>{{$page.post.title}}</h3>
          <p v-html="blurbText"></p>
        </div>
      </div>
      <transition name="fade" appear>
        <div class="image-container">
          <div v-for="image in images" :key="image.uid">
            <g-image
              :style="{width: width}"
              class="port-image"
              :alt="image.data.alt"
              :src="image.data.url"
            />
          </div>
        </div>
      </transition>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "WorkPost",
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { key: "description", name: "description", content: this.blurbText }
      ]
    };
  },
  data() {
    return {
      opacity: "1",
      width: "80%"
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
  },
  mounted: function() {
    window.addEventListener("scroll", this.scrollSize);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.scrollSize);
  },
  methods: {
    scrollSize() {
      let scrollVar = window.scrollY;
      let scrollVarPerc = 80 + (100 - (100 - window.scrollY / 10)) + "%";
      let opacityNum = (100 - scrollVar) / 100;
      this.opacity = opacityNum;
      this.width = scrollVarPerc;
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
  margin-top: 50px;
  position: relative;
  width: 100%;

  @include respond-to("medium") {
    margin: 0px auto;
  }
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
  max-width: 350px;
  z-index: 999;

  a {
    @include respond-to("medium") {
      opacity: 1 !important;
    }
  }

  .blurb {
    padding: 15px;
    height: auto;
    border: 4px solid black;
    background-color: $color2;
    margin-top: 20px;
    font-family: $body;
    @include respond-to("medium") {
      opacity: 1 !important;
    }
  }

  h3 {
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
  }

  p {
    font-size: $bodyFontSize;
    line-height: 22px;

    @include respond-to("medium") {
      font-size: 13px;
      line-height: 19px;
    }
  }

  @include respond-to("medium") {
    position: relative;
    margin: 20px auto 20px;
  }
}

.port-image {
  max-width: 100% !important;
  width: 80%;
  float: right;
  margin-bottom: 50px;

  @include respond-to("medium") {
    float: none;
    width: 100% !important;
    margin-bottom: 20px;
  }
}

.fade-enter-active {
  opacity: 1;
  transition: opacity 0.2s;
}

.fade-enter {
  opacity: 0;
}
</style>