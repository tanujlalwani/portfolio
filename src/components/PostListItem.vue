<template>
  <router-link class="post-list-item scroll-snap-start" :to="{
        name: 'post.path',
      }">
    <video
      v-if="post.coverVideo"
      :poster="getCoverImage(post.path)"
      preload="none"
      playsinline
      muted
      class="post-list-item-video size-fill-viewport"
      :id="'post-list-item-video-' + post.id"
      loop
      @mouseenter="playVideo(post.id)"
      @mouseleave="pauseVideo(post.id)"
    >
      <source :src="getCoverVideo(post.path)" type="video/webm" />
      <source :src="getCoverVideoAlt(post.path)" type="video/mp4" />
    </video>
    <img
      v-else
      class="post-list-item-image size-fill-viewport"
      :src="getCoverImage(post.path)"
      type="image/png"
    />
    <!-- <h1 class="post-list-item-title">{{ post.title }}</h1> -->
  </router-link>
</template>

<script>
export default {
  props: ["index", "post"],
  data() {
    return {};
  },
  methods: {
    getCoverImage(path) {
      return require("../assets/posts/" + path + "/cover.png");
    },
    getCoverVideo(path) {
      return require("../assets/posts/" + path + "/cover.webm");
    },
    getCoverVideoAlt(path) {
      return require("../assets/posts/" + path + "/cover.mp4");
    },
    playVideo(id) {
      document.getElementById("post-list-item-video-" + id).play();
    },
    pauseVideo(id) {
      document.getElementById("post-list-item-video-" + id).pause();
      document.getElementById("post-list-item-video-" + id).currentTime = 0;
    }
  }
};
</script>

<style lang="scss">
.post-list-item {
  width: 100%;
  height: 100vh;

  scroll-snap-align: start;
  overflow: hidden;

  .post-list-item-image,
  .post-list-item-video {
    object-fit: cover;
  }

  // .post-list-item-title {
  // }
}
</style>
