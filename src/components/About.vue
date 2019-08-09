<template>
  <div class="about">
    <p class="about-text" v-bind:class="{ 'about-text-creative': creativeOn }">
      I apologize for Tangerine. It's still a work in progress. However when I'm not dealing with it tantrums, I work as a
      <span
        class="creative"
        @click="creativeHover()"
        @mouseleave="creativeHoverOff()"
      >creative</span>
      &#32;
      <span class="technologist">technologist</span>
      at the interesction of technology and design. Over the last few years, these fields have been increasingly integrated. I intend to use my unique skillset to continue pushing the boundaries of the way we build and interact with the connected world around us in new and meaningful ways.
      <br />
      <br />- Tanuj
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      creativeOn: false
    };
  },
  methods: {
    creativeHover: function() {
      this.creativeOn = !this.creativeOn;
    },
    creativeHoverOff: function() {
      this.creativeOn = false;
    }
  }
};
</script>

<style lang="scss">
.about {
  width: 100%;
  // border-top: 1px solid #fff;
}

.about-text {
  width: 60%;

  display: block;
  margin: 5em auto 5em auto;
  // transform: rotate(-3deg);

  font: 1.8em "Space Mono", monospace;
  font-weight: 300;
  color: #fff;

  line-height: 1.3;
  letter-spacing: 0;
  word-spacing: -0.2rem;
  font-variant-ligatures: none;

  text-align: left;
  cursor: default;

  .creative,
  .technologist {
    cursor: pointer;
  }
}

.about-text-creative {
  // font: 2em "Flow", monospace;
  // line-height: 1.1;
  // word-spacing: 0.32rem;
  // transform: scale(1.1, 1);

  // .creative {
  //   cursor: pointer;
  //   font: 0.82em "Space Mono", monospace;
  //   line-height: 1.3;
  //   letter-spacing: 0;
  //   word-spacing: -0.2rem;
  //   font-variant-ligatures: none;
  // }

  background: linear-gradient(
    100deg,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
  background-size: 200% auto;

  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: rainbow 1.2s linear infinite;
  @keyframes rainbow {
    to {
      background-position: 200% center;
    }
  }
}
</style>
