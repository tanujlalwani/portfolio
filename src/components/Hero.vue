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
      audioObj: null
    };
  },
  mounted() {
    this.audioObj = document.getElementById("jazz");
    const instance = new TypeIt("#tangerine")
      .options({
        html: true,
        speed: 0,
        waitUntilVisible: true
      })
      .type(
        `They said give your website some personality.
          <br/>
          So he gave it <i>a</i> personality. He made me.
          <br/><br/>
          Hi! I'm Tangerine. Nice to meet you :)`
      )
      .exec(async () => {
        this.instructionsText = "Press any key to continue";
        await new Promise((resolve, reject) => {
          document.onkeypress = function(evt) {
            evt = evt || window.event;
            var charCode = evt.keyCode || evt.which;
            var charStr = String.fromCharCode(charCode);
            resolve();
          };
        });
        this.instructionsText = null;
      })
      .empty()
      .type(
        `I wasn't expecting anyone to come around today!
        <br/>I'll just get everything set up.
        <br/>Make yourself comfortable, have a cookies or something?`
      )
      .type(
        `How about some music?
        <br/>People with a great taste in music are supposed to personable, right?`
      )
      .exec(async () => {
        this.instructionsText = "Y/N";
        await new Promise((resolve, reject) => {
          document.onkeypress = function(evt) {
            evt = evt || window.event;
            var charCode = evt.keyCode || evt.which;
            var charStr = String.fromCharCode(charCode);
            resolve();
          };
        });
        this.audioObj.play();
      })
      .go();
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

  .hero-text {
    width: 80%;
    margin: 0 10%;

    height: 100%;

    grid-row: 2/9;

    font-size: 2.1rem;
    font-weight: var(--font-weight-bold);
    color: var(--primary-color-text);

    line-height: 1.3em;

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
