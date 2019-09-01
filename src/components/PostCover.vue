<template>
  <div class="post-cover">
    <video
      id="posts-view-video"
      v-if="post.coverVideo"
      :poster="getCoverImage"
      preload="none"
      playsinline
      muted
      class="post-list-item-video"
      autoplay
      loop
      :src="getCoverVideo"
      type="video/webm"
    ></video>
    <img
      v-else
      class="post-list-item-image size-fill-viewport"
      :src="getCoverImage"
      type="image/png"
    />
  </div>
</template>

<script>
export default {
  name: "post-cover",
  props: ["post"],
  computed: {
    path() {
      return this.post.path;
    },
    getCoverImage(path) {
      return require("../assets/posts/" + this.path + "/cover.png");
    },
    getCoverVideo(path) {
      return require("../assets/posts/" + this.path + "/cover.webm");
    },
    getCoverVideoAlt(path) {
      return require("../assets/posts/" + this.path + "/cover.mp4");
    }
  }
};
</script>

<style lang="scss">
.post-cover {
  width: 100%;
  height: 100%;

  .post-list-item-image,
  .post-list-item-video {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  video[poster] {
    object-fit: cover;
  }
}

.full-cover {
  .post-list-item-image,
  .post-list-item-video {
    width: 100vw;
    height: 100vh;
    border-radius: 0px;

    margin: auto;
  }
}
</style>
