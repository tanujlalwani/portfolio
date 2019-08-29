<template>
  <div class="post-cover">
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
  </div>
</template>

<script>
export default {
  name: "post-cover",
  props: ["post"],
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
.post-cover {
  width: 100%;
  height: 100vh;

  .post-list-item-image,
  .post-list-item-video {
    width: 85%;
    height: 85%;
    border-radius: 10px;
    margin: auto;
    display: block;
    object-fit: cover;

    transition: all 300ms ease-out;
  }

  video[poster] {
    object-fit: cover;
  }
}

.clicked {
  .post-list-item-image,
  .post-list-item-video {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
}
</style>
