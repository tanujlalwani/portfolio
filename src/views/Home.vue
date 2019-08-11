<template>
  <div class="home size-fill-viewport">
    <hero></hero>
    <about></about>
    <!-- <marquee-text
      class="user-select-none"
      :repeat="20"
      :duration="6"
      :paused="workMarqueePause"
      @mouseover="workMarqueeHover"
    >WORK&nbsp;•&nbsp;WORK&nbsp;•&nbsp;</marquee-text>-->
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
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.marquee-text-wrap {
  padding: 0.5em 0 0.5em 0;

  border: var(--border-default);
  border-left: 0;
  border-right: 0;
}

.marquee-text-text {
  font-size: 2em;
  font-weight: var(--font-weight-bold);
}
</style>
