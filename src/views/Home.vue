<template>
  <div class="home">
    <hero></hero>
    <marquee-text
      :repeat="5"
      :duration="10"
      :paused="workMarqueePause"
      @mouseover="workMarqueeHover()"
    >Who are you? •&nbsp;</marquee-text>
    <about></about>
    <marquee-text :duration="40" :paused="workMarqueePause" @mouseover="workMarqueeHover()">
      WORK • WORK • WORK • WORK • WORK • WORK • WORK • WORK • WORK • WORK •&nbsp;
      <!-- <span
        class="orange"
      >NA • NA • NA • NA • DURP • DURP • DURP • DURP • TWERK • TWERK • TWERK • TWERK •&nbsp;</span>-->
    </marquee-text>
    <post-list></post-list>
  </div>
</template>

<script>
import Hero from "@components/Hero.vue";
import About from "@components/About.vue";
import PostList from "@components/PostList.vue";

export default {
  components: {
    PostList,
    Hero,
    About
  },
  data() {
    return {
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

.marquee-text-wrap {
  display: block;
  padding: 0.5em 0 0.5em 0;
  // transform: rotate(3deg);

  background-color: #000;

  // border: 1px solid #fff;
  border-left: 0;
  border-right: 0;

  user-select: none;
}

@import url("https://fonts.googleapis.com/css?family=Space+Mono&display=swap");
@import url("https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap");
@import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap");

.marquee-text-text {
  font: normal 800 40px "Space Mono";
  color: rgb(255, 240, 37);
  text-decoration-line: blink;
  // -webkit-text-stroke: 1px white;
}

.orange {
  font: normal 400 40px "Space Mono";
  color: rgb(223, 69, 22);
}
</style>
