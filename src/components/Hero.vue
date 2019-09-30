<template>
  <section class="hero size-fill-viewport scroll-snap-start">
    <div id="tangerine" class="hero-text user-select-none"></div>
    <div class="instructions">
      <span
        class="instructions-text user-select-none"
        v-show="instructionsText"
        v-html="instructionsText"
      ></span>
    </div>
    <audio id="jazz" volume="0.1">
      <source src="../assets/sounds/jazz.mp3" type="audio/mp3" />
    </audio>
  </section>
</template>

<script>
import TypeIt from "typeit";

export default {
  data() {
    return {
      instructionsText: false,
      audioObj: null,
      moodLighting: false,
      seenTangerine: false
    };
  },
  mounted() {
    this.audioObj = document.getElementById("jazz");

    new TypeIt("#tangerine")
      .options({
        speed: 50,
        html: true
      })
      .type(`Heyya! I'm Tangerine 🍊 and I'm a bot 🤖.`)
      .pause(1000)
      .delete(8)
      .type(`n <i>unfinished</i> bot 🤖.`)
      .type(
        `
          <br/><br/>Well, this is embarassing`
      )
      .pause(400)
      .type(`.`)
      .pause(400)
      .type(`.`)
      .pause(400)
      .type(`.`)
      .pause(400)
      .type(
        `<br/><br/>Someday my creator will finish building me
        <br/>(no, he's not just lazy, <i>you're</i> lazy)
          <br/>Till then, I'm just a bunch of sarcastic code named after a fruit.
          <br/><br/>Anyway, use your free will!
          <br/>Go on and explore the wonders that lie below.
          <br/><br/>I'll just munch on your cookies
          <br/>(jk I'm not Facebook)
          <br/>and listen to some smooooooooth jazz.`
      )
      .exec(() => {
        this.instructionsText = "↓ ↓ ↓";
      })
      .go();
    // this.audioObj.play();
  }
};
</script>

<style lang="scss">
.hero {
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: repeat(9, 1fr);

  background-color: var(--primary-color);

  border: 0.3rem solid #fff;

  // cursor: url(../assets/icons/circle.png) 10 10, auto;

  .hero-text {
    width: 80%;
    margin: 0 10%;

    height: 100%;

    grid-row: 2/9;

    font-size: 1.5rem;
    font-weight: var(--font-weight-bold);
    color: var(--primary-color-text);

    line-height: 1.5em;

    // cursor: url(../assets/icons/circle.png) 10 10, auto;

    i {
      font-weight: var(--font-weight-normal);
      font-style: italic;
    }
  }

  .instructions {
    height: 100%;
    margin: 0 10%;

    grid-row: 9/10;

    .instructions-text {
      background: #fff;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      color: var(--primary-color);
      font-weight: var(--font-weight-bold);
      font-size: 1.4rem;
      animation: fade 1s ease infinite alternate;
    }
  }

  @keyframes fade {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
}

@media only screen and (max-width: 1050px) {
  .line-break {
    display: none;
  }
}

@media only screen and (max-width: 500px) {
  .hero {
    .hero-text {
      font-size: 1.8rem;
    }
  }
}
</style>
