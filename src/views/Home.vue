<template>
  <div class="home size-fill-viewport">
    <hero></hero>
    <about></about>
    <posts></posts>
  </div>
</template>

<script>
import Hero from "@components/Hero.vue";
import About from "@components/About.vue";
import Posts from "@components/Posts.vue";

export default {
  name: "home",
  components: {
    Hero,
    About,
    Posts
  },
  data() {
    return {
      posts: Posts.posts
    };
  }
};
</script>

<style lang="scss">
.home {
  // overflow-x: hidden;
  // overflow-y: scroll;

  // overscroll-behavior: contain;
  // scroll-snap-type: y mandatory;
}
</style>
