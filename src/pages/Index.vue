<template>
  <Layout>
    <div class="twitter">
      <div aria-label="latest Tweet" class="centerer">
        <p>
          Front End Developer in the streets. Aspiring Blender and Unity dev in
          the sheets.
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "Index",
  metaInfo: {
    title: "The work of Thomas Cober",
    meta: [
      {
        key: "google-site-verification",
        name: "google-site-verification",
        content: "9Agzu25KvRoSoVnG79Lq6hpJUAQMJrlkA5Xn80Fgop4",
      },
      {
        key: "description",
        name: "description",
        content: "Websites, code, and music that I have done over the years.",
      },
    ],
  },
  computed: {
    tweet() {
      return this.$static.allTweet.edges[0].node.data[0];
    },
  },
  methods: {
    dateFormat(date) {
      let newDate = new Date(date).toDateString();
      return newDate;
    },
  },
};
</script>

<style lang="scss" scoped>
.centerer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  line-height: 21px;

  @include respond-to("medium") {
    width: 75%;
    line-height: 19px;
  }

  .created {
    text-decoration: underline;
  }
}

.twitter {
  float: left;
  position: relative;
  margin-top: 100px;
  width: 350px;
  height: 350px;
  border-radius: 350px;
  background-color: $color1;
  color: $color2;
  font-size: $bodyFontSize;
  font-family: $body;

  @include respond-to("medium") {
    float: none;
    margin: 20px auto;
    width: 225px;
    height: 225px;
    font-size: 12px;
  }
}
</style>
