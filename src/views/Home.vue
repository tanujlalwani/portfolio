<template>
  <div class="home size-fill-viewport">
    <hero></hero>
    <about></about>
    <div class="divider"></div>
    <div class="post-list display-flex-column">
      <post-list-item v-for="post in posts" v-bind:key="post.id" v-bind:post="post"></post-list-item>
    </div>
  </div>
</template>

<script>
import Hero from "@components/Hero.vue";
import About from "@components/About.vue";
import PostListItem from "@components/PostListItem.vue";

import Posts from "@posts/posts.json";

export default {
  name: "home",
  components: {
    Hero,
    About,
    PostListItem
  },
  data() {
    return {
      posts: Posts.posts,
      workMarqueePause: false
    };
  },
  methods: {
    workMarqueeHover: function() {
      this.workMarqueePause = !this.workMarqueePause;
    }
  }
};
</script>

<style lang="scss">
.home {
  // overflow-x: hidden;
  // overflow-y: scroll;

  overscroll-behavior: contain;
  scroll-snap-type: y mandatory;

  .post-list {
    margin-top: 6em;
  }

  .divider {
    height: 1px;
    width: 105vw;
    background-image: linear-gradient(
      to right,
      black 35%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: bottom;
    background-size: 2em 1px;
    background-repeat: repeat-x;
  }
}
</style>
