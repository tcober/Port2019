<template>
  <Layout>
    <div class="player">
      <g-link class="musicCloser" to="/">X</g-link>
      <transition name="fade" appear>
        <iframe
          width="100%"
          height="450"
          scrolling="no"
          frameborder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/12351544&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=false&amp;show_reposts=false"
        ></iframe>
      </transition>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "Music"
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 0.8s;
}

.fade-enter {
  opacity: 0;
}

.player {
  position: relative;
  margin: 20px 0;
  width: 100%;
}
</style>

