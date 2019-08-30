<template>
  <section class="about size-fill-viewport scroll-snap-start">
    <marquee-text class="marquee-about" :repeat="8" :duration="10">ARTIFICIAL TANGERINE&nbsp;•&nbsp;</marquee-text>
    <div class="about-text-wrapper display-flex-column">
      <p
        class="about-text"
        v-bind:class="{ 'about-creative': creativeOn, 'about-creative-done': creativeDone, 'about-technologist': technologistOn}"
      >
        <span
          class="about-technologist-text"
        >{{ technologistOn ? technologistBinary[0] : technologistText[0] }}</span>
        <span
          class="creative about-technologist-text"
          @mouseenter="creativeHoverOn"
          @mouseleave="creativeHoverOff"
        >{{ technologistOn ? technologistBinary[1] : technologistText[1] }}</span>
        <span
          class="about-technologist-text"
        >{{ technologistOn ? technologistBinary[2] : technologistText[2] }}</span>
        <span
          class="technologist"
          @mouseenter="technologistHoverOn"
          @mouseleave="technologistHoverOff"
        >technologist</span>
        <span
          class="about-technologist-text"
        >{{ technologistOn ? technologistBinary[3] : technologistText[3] }}</span>
        <br />
        <br />- Tanuj
      </p>
    </div>
  </section>
</template>

<script>
import baffle from "baffle";

export default {
  data() {
    return {
      creativeOn: false,
      creativeDone: false,
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
      ],
      baffleObject: null
    };
  },
  methods: {
    creativeHoverOn: function() {
      if (!this.technologistOn) this.creativeOn = !this.creativeOn;
    },
    creativeHoverOff: function() {
      this.creativeOn = false;
      this.creativeDone = true;
      setTimeout(() => {
        this.creativeDone = false;
      }, 700);
    },
    technologistHoverOn: function() {
      if (!this.creativeOn) this.technologistOn = !this.technologistOn;
      this.baffleObject.start(700);
    },
    technologistHoverOff: function() {
      this.technologistOn = false;
      this.baffleObject.reveal(500);
    }
  },
  mounted() {
    this.baffleObject = baffle(".about-technologist-text", {
      characters: "10",
      speed: 200
    });
  }
};
</script>

<style lang="scss">
@import "../styles/about-styles.scss";

.about-text-wrapper {
  height: 100%;
  flex-grow: 1;
}

.about-text {
  width: 60%;

  font-size: 1.5rem;
  cursor: default;
}

.marquee-about {
  align-self: flex-start;
  user-select: none;

  .marquee-text-wrap {
    padding: 0.5em 0 0.5em 0;
    .marquee-text-text {
      font-size: 1em;
    }
  }
}
</style>
