<template>
  <router-link class="post-list-item" :to="{
        name: 'post.path',
      }">
    <video
      v-if="post.coverVideo"
      class="post-list-item-video"
      :id="'post-list-item-video-' + post.id"
      loop
      @mouseenter="playVideo(post.id)"
      @mouseleave="pauseVideo(post.id)"
    >
      <source :src="getCoverVideo(post.path)" type="video/mp4" />
    </video>
    <img v-else class="post-list-item-image" :src="getCoverImage(post.path)" type="image/png" />
    <h1 class="post-list-item-title">{{ post.title }}</h1>
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
  scroll-snap-align: start;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  // margin: 5% 3% 5% 3%;
  // border: 1px solid #fff;

  &:last-child {
    margin-bottom: 3%;
  }

  background-color: hsl(0, 0, 0);

  // opacity: 0.5;
  // transition: 0.7s opacity;

  // &:hover {
  //   opacity: 1;
  // }

  .post-list-item-video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .post-list-item-image {
    height: 100%;
    width: 100%;

    object-fit: cover;
  }

  .post-list-item-title {
    font: 1.8em "Space Mono", monospace;
    font-weight: 300;
    color: rgb(255, 255, 255);
    text-decoration: none;

    line-height: 1.3;
    letter-spacing: 0;
    word-spacing: -0.2rem;
    font-variant-ligatures: none;
  }
}
</style>
