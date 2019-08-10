<template>
  <div class="about">
    <marquee-text
      :repeat="8"
      :duration="10"
      :paused="workMarqueePause"
      @mouseover="workMarqueeHover"
    >Who are you?&nbsp;•&nbsp;</marquee-text>
    <p
      class="about-text"
      v-bind:class="{ 'about-text-creative': creativeOn, 'about-text-technologist': technologistOn}"
    >
      {{ technologistOn ? technologistBinary[0] : technologistText[0] }}
      <span
        class="creative"
        @click="creativeClick"
        @mouseleave="creativeHoverOff"
      >{{ technologistOn ? technologistBinary[1] : technologistText[1] }}</span>
      {{ technologistOn ? technologistBinary[2] : technologistText[2] }}
      <span
        class="technologist"
        @click="technologistClick()"
        @mouseleave="technologistHoverOff"
      >technologist</span>
      {{ technologistOn ? technologistBinary[3] : technologistText[3] }}
      <br />
      <br />- Tanuj
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      creativeOn: false,
      technologistOn: false,
      technologistBinary: [
        "0 100101100 000 0101001011 1101 01010 0 0000 00 001101011 0110100 1010 111 100 1000011 0110 110 001101101 0 0110 00 1 ",
        "11001110",
        " ",
        " 11 001 000101001001 10 0100100100 100 0100111 1010 001 0011 101 110000 00000 110111 0110 1000 000001010101 01110101101 0 101010 11 001 11 111110 01101111 00 01001010 0000000 100 0110100111 11 011 001 00 01010 011 10100000 1011 101 101110101 11010 111101 01 00 110 110 0100011110 00001"
      ],
      technologistText: [
        "I apologize for Tangerine. It's still a work in progress. However when I'm not dealing with its tantrums, I work as a ",
        "creative",
        " ",
        " at the intersection of technology and design. Over the last few years, these fields have been increasingly integrated. I intend to use my unique skillset to continue pushing the boundaries of the way we build and interact with the connected world around us in new and meaningful ways."
      ]
    };
  },
  methods: {
    creativeClick: function() {
      if (!this.technologistOn) this.creativeOn = !this.creativeOn;
    },
    creativeHoverOff: function() {
      setTimeout(() => (this.creativeOn = false), 1000);
    },
    technologistClick: function() {
      if (!this.creativeOn) this.technologistOn = !this.technologistOn;
    },
    technologistHoverOff: function() {
      setTimeout(() => (this.technologistOn = false), 1000);
    }
  }
};
</script>

<style lang="scss">
.about {
  width: 100%;
  height: 105%;
  // border-top: 1px solid #fff;
}

.about-text {
  width: 60%;

  display: block;
  margin: 5em auto 5em auto;
  // transform: rotate(-3deg);

  font: 1.8em "Space Mono", monospace;
  font-weight: 300;
  color: rgb(255, 255, 255);

  line-height: 1.3;
  letter-spacing: 0;
  word-spacing: -0.2rem;
  font-variant-ligatures: none;

  text-align: left;
  cursor: default;

  .creative,
  .technologist {
    cursor: pointer;
    text-decoration: underline solid;
    font-weight: 800;
    color: yellow;
  }
}

.about-text-creative {
  font: 2em "Flow", monospace;
  line-height: 1.04;
  word-spacing: 0.48rem;
  transform: scaleY(1.1);

  .creative {
    cursor: pointer;
    font: 0.9em "Space Mono", monospace;
    text-decoration: underline solid;
  }

  background: linear-gradient(
    100deg,
    red,
    orange,
    yellow,
    green,
    cyan,
    blue,
    indigo,
    violet,
    red
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

.about-text-technologist {
  color: green;
  .creative {
    text-decoration: none;
    font-weight: 400;
    color: green;
  }
}
</style>
