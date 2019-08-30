<template>
  <section class="about size-fill-viewport scroll-snap-start">
    <marquee-text class="marquee-about" :repeat="8" :duration="10">ARTIFICIAL TANGERINE&nbsp;•&nbsp;</marquee-text>
    <div class="about-text-wrapper display-flex-column">
      <p
        class="about-text"
        v-bind:class="{ 'about-text-creative': creativeOn, 'about-text-technologist': technologistOn}"
      >
        {{ technologistOn ? technologistBinary[0] : technologistText[0] }}
        <span
          class="creative"
          @mouseenter="creativeHoverOn"
          @mouseleave="creativeHoverOff"
        >{{ technologistOn ? technologistBinary[1] : technologistText[1] }}</span>
        {{ technologistOn ? technologistBinary[2] : technologistText[2] }}
        <span
          class="technologist"
          @mouseenter="technologistHoverOn"
          @mouseleave="technologistHoverOff"
        >technologist</span>
        {{ technologistOn ? technologistBinary[3] : technologistText[3] }}
        <br />
        <br />- Tanuj
      </p>
    </div>
  </section>
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
    creativeHoverOn: function() {
      if (!this.technologistOn) this.creativeOn = !this.creativeOn;
    },
    creativeHoverOff: function() {
      this.creativeOn = false;
    },
    technologistHoverOn: function() {
      if (!this.creativeOn) this.technologistOn = !this.technologistOn;
    },
    technologistHoverOff: function() {
      this.technologistOn = false;
    }
  }
};
</script>

<style lang="scss">
.about-text-wrapper {
  height: 100%;
  flex-grow: 1;
}

.about-text {
  width: 60%;
  // flex-grow: 1;

  font-size: 1.5rem;
  cursor: default;

  .creative,
  .technologist {
    cursor: pointer;
    text-decoration: underline solid;
    font-weight: var(--font-weight-bold);
    color: var(--primary-color);
  }
}
.marquee-about {
  align-self: flex-start;
  user-select: none;
}

.marquee-text-wrap {
  padding: 0.5em 0 0.5em 0;
}

.marquee-text-text {
  font-size: 1em;
}

.about-text-creative {
  user-select: none;

  .creative {
    transform: none;
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
  }

  background: linear-gradient(
    100deg,
    #ff3b3b,
    #fa9826,
    #ffd400,
    #c2ff00,
    #00ffde,
    #6ae2cb,
    #00ccff,
    #00ffde,
    #c2ff00,
    #ffd400,
    #fa9826,
    #ff3b3b
  );
  background-size: 200% auto;

  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: rainbow 1.5s linear infinite;
  @keyframes rainbow {
    to {
      background-position: 200% center;
    }
  }
}

.about-text-technologist {
  user-select: none;

  color: green;
  .creative,
  .technologist {
    text-decoration: none;
    color: green;
    font-weight: var(--font-weight-normal);
  }
}
</style>
