<template>
  <div class="home">
    <hero></hero>
    <about></about>
    <marquee-text
      :repeat="20"
      :duration="6"
      :paused="workMarqueePause"
      @mouseover="workMarqueeHover"
    >
      WORK&nbsp;•&nbsp;WORK&nbsp;•&nbsp;
      <!-- <span
        class="orange"
      >NA • NA • NA • NA • DURP • DURP • DURP • DURP • TWERK • TWERK • TWERK • TWERK •&nbsp;</span>-->
    </marquee-text>
    <div class="post-list">
      <post-list-item v-for="(post, index) in posts" v-bind:key="index" v-bind:title="post"></post-list-item>
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
      posts: ["the-aditi-wall", "reach-out-of-the-box", "binary", "artwork"],
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
  width: 100%;
  height: 100%;

  overflow-y: scroll;
  overflow-x: hidden;

  display: block;

  background-color: #000;
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
  // transform: rotate(3deg);

  background-color: #000;

  border: 1px solid #fff;
  border-left: 0;
  border-right: 0;

  user-select: none;
}

@import url("https://fonts.googleapis.com/css?family=Space+Mono&display=swap");
@import url("https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap");
@import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap");

.marquee-text-text {
  font: normal 800 40px "Space Mono";
  color: rgb(255, 255, 255);
  // text-decoration-line: overline;
  // -webkit-text-stroke: 1px white;
}

.orange {
  font: normal 400 40px "Space Mono";
  color: rgb(223, 69, 22);
}
</style>
