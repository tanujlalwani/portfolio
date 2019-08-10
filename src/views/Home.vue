<template>
  <div class="home">
    <hero></hero>
    <about></about>
    <marquee-text
      :repeat="20"
      :duration="6"
      :paused="workMarqueePause"
      @mouseover="workMarqueeHover"
    >WORK&nbsp;•&nbsp;WORK&nbsp;•&nbsp;</marquee-text>
    <div class="post-list">
      <post-list-item v-for="post in posts" v-bind:key="post.id" v-bind:post="post"></post-list-item>
    </div>
  </div>
</template>

<script>
import Hero from "@components/Hero.vue";
import About from "@components/About.vue";
import PostListItem from "@components/PostListItem.vue";

export default {
  components: {
    Hero,
    About,
    PostListItem
  },
  data() {
    return {
      posts: [
        {
          id: "0",
          title: "The Aditi Wall",
          path: "the-aditi-wall",
          tags: ["web", "identity"],
          coverVideo: false,
          theme: "black"
        },
        {
          id: "1",
          title: "Reach Out of the Box",
          path: "reach-out-of-the-box",
          tags: ["identity", "print"],
          coverVideo: true,
          theme: "black"
        },
        {
          id: "2",
          title: "Continuum",
          path: "continuum",
          tags: ["motion"],
          coverVideo: true,
          theme: "black"
        },
        {
          id: "3",
          title: "Binary",
          path: "binary",
          tags: ["motion"],
          coverVideo: true,
          theme: "black"
        },
        {
          id: "4",
          title: "Artwork",
          path: "artwork",
          tags: ["fine art"],
          coverVideo: true,
          theme: "white"
        }
      ],
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
  width: var(--size-100-percent);
  height: var(--size-100-percent);

  overflow-y: scroll;

  scroll-snap-type: y mandatory;
}

.post-list {
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}

.marquee-text-wrap {
  display: block;
  padding: 0.5em 0 0.5em 0;

  border: var(--border-default);
  border-left: 0;
  border-right: 0;

  user-select: none;
}

.marquee-text-text {
  font-size: 2em;
  font-weight: var(--font-weight-bold);
}
</style>
