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
      class="post-list-item-video"
      :id="'post-list-item-video-' + post.id"
      loop
      @mouseenter="playVideo(post.id)"
      @mouseleave="pauseVideo(post.id)"
    >
      <source :src="getCoverVideo(post.path)" type="video/webm" />
      <source :src="getCoverVideoAlt(post.path)" type="video/mp4" />
    </video>
    <img v-else class="post-list-item-image" :src="getCoverImage(post.path)" type="image/png" />
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
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .post-list-item-image,
  .post-list-item-video {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  // .post-list-item-title {
  //   font: 1.8em "Space Mono", monospace;
  //   font-weight: 300;
  //   color: rgb(255, 255, 255);
  //   text-decoration: none;

  //   line-height: 1.3;
  //   letter-spacing: 0;
  //   word-spacing: -0.2rem;
  //   font-variant-ligatures: none;
  // }
}
</style>
