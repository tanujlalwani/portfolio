<template>
  <router-link class="post-list-item" :to="{
        name: 'post.path',
      }">
    <img class="post-list-item-image" :src="getCover(post.path)" type="image/png" />
    <h1 class="post-list-item-title">{{ post.title }}</h1>
  </router-link>
</template>

<script>
export default {
  props: ["post"],
  data() {
    return {};
  },
  methods: {
    getCover(path) {
      return require("../assets/posts/" + path + "/cover.png");
    }
  }
};
</script>

<style lang="scss">
.post-list-item {
  scroll-snap-align: start;

  height: 100vh;
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
