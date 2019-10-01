<template>
  <div class="app size-fill-viewport" :class="{ 'overflow-hidden': overflowHidden }">
    <router-view />
    <span class="nav-path user-select-none" :class="{'hud-post': postOpen}">{{ postTitle }}</span>
    <!-- <router-link to="/" class="nav-link"> -->
    <span
      id="jazz-toggle"
      class="nav-link-button user-select-none"
      :class="{'hud-post': postOpen, 'nav-link-button-playing': jazzPlaying}"
      v-show="!overflowHidden"
      @click="toggleJazz()"
    ></span>
    <!-- </router-link> -->
    <div class="overlay"></div>
    <audio id="jazz" volume="0.1" loop muted>
      <source src="/assets/sounds/jazz.mp3" type="audio/mp3" />
    </audio>
  </div>
</template>

<script>
import { EventBus } from "./event-bus.js";

// window.onblur = function() {
//   while (document.title.length > 0) {
//     document.title = document.title.slice(1);
//   }
//   document.title = "sup";
// };

export default {
  data() {
    return {
      postTitle: "tangerine v0.1",
      postOpen: false,
      jazzPlaying: false,
      audioObj: null,
      overflowHidden: true
    };
  },
  methods: {
    toggleJazz() {
      if (this.jazzPlaying) {
        this.audioObj.pause();
      } else {
        var playPromise = this.audioObj.play();
        if (playPromise !== undefined) {
          playPromise.then(_ => {}).catch(error => {});
        }
      }
      this.jazzPlaying = !this.jazzPlaying;
    }
  },
  created() {
    EventBus.$on("post-opened", title => {
      this.postOpen = true;
    });
    EventBus.$on("tangerine-done", title => {
      this.overflowHidden = false;
    });
  },
  mounted() {
    this.audioObj = document.getElementById("jazz");
  },
  watch: {
    $route(to, from) {
      if (to.name == "home") this.postOpen = false;
      else if (to.name == "post") this.postOpen = true;
    }
  }
};
</script>

<style lang="scss">
/* CSS Reset */
@import "./styles/_reset.scss";

/* Font Imports */
@import url("https://fonts.googleapis.com/css?family=Space+Mono&display=swap");
@import url("https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap");

/* Font Settings */

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* CSS Global Style Variables */

:root {
  --background-color-default: #fff;
  --primary-color: #ff9900;
  --primary-color-text: #fff;

  --accent-color: #05f;

  --font-color-default: #000;
  --font-color-light: #666;

  --font-family: "Space Mono", monospace;
  --font-style-default: normal;
  --font-weight-normal: 400;
  --font-weight-bold: 800;

  --font-line-height-default: 1.3;
  --font-letter-spacing-default: -0.003rem;
  --font-word-spacing-default: -0.2rem;
  --font-variant-ligatures: none;

  --text-word-break: keep-all;
  --text-word-wrap: normal;

  --border-default: 1px solid #000;

  --size-100-percent: 100%;
}

/* CSS Global Styles */

body {
  background-color: var(--background-color-default);
  font: var(--font-style-default) var(--font-weight-normal) 1em
    var(--font-family);
  color: var(--font-color-default);

  line-height: var(--font-line-height-default);
  letter-spacing: var(--font-letter-spacing-default);
  font-variant-ligatures: var(--font-variant-ligatures);
  word-spacing: var(--font-word-spacing-default);

  word-break: var(--text-word-break);
  word-wrap: var(--text-word-wrap);

  overflow-x: hidden;

  // cursor: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 49.6 49.6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='svgGroup' stroke-linecap='round' fill-rule='evenodd' font-size='9pt' stroke='%23000' stroke-width='0.25mm' fill='%23000' style='stroke:%23000;stroke-width:0.25mm;fill:%23000'%3E%3Cpath d='M 39.8 4.7 L 44.9 9.8 L 36.1 18.6 L 31.1 21.4 L 31.6 22.6 L 36.1 21.2 L 49.6 21.2 L 49.6 28.4 L 36.1 28.4 L 31.6 27 L 31.1 28.2 L 36.1 31 L 44.9 39.8 L 39.8 44.9 L 31 36.1 L 28.2 31.1 L 27 31.6 L 28.4 36.1 L 28.4 49.6 L 21.2 49.6 L 21.2 36.1 L 22.6 31.6 L 21.4 31.1 L 18.6 36.1 L 9.8 44.9 L 4.7 39.8 L 13.5 31 L 18.5 28.2 L 18 27 L 13.5 28.4 L 0 28.4 L 0 21.2 L 13.5 21.2 L 18 22.6 L 18.5 21.4 L 13.5 18.6 L 4.7 9.8 L 9.8 4.7 L 18.6 13.5 L 21.4 18.5 L 22.6 18 L 21.2 13.5 L 21.2 0 L 28.4 0 L 28.4 13.5 L 27 18 L 28.2 18.5 L 31 13.5 L 39.8 4.7 Z' vector-effect='non-scaling-stroke'/%3E%3C/g%3E%3C/svg%3E"),
  //   auto !important;
}

* {
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
}

.size-fill-viewport {
  width: 100%;
  height: 100%;
}

.display-flex-column {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}

.scroll-snap-start {
  scroll-snap-align: start;
}

.user-select-none {
  cursor: default;
  user-select: none;
}

/* App Layout */

html,
body,
.app {
  background-color: var(--background-color-default);
  z-index: 0;
}

.app {
  width: 100vw;
  height: 100vh;
}

.overflow-hidden {
  overflow-y: hidden;
}

.nav-path {
  position: fixed;
  bottom: 0;
  right: 4rem;

  color: #222;

  transform-origin: top right;
  transform: rotate(90deg);

  width: 100vh;
  text-align: center;

  mix-blend-mode: difference;
  z-index: 1000 !important;
}

.hud-post {
  color: #999;
}

.nav-link-button {
  width: 2rem;
  height: 2rem;
  transform-origin: center;

  border-radius: 50%;
  border: 0.2rem solid #222;

  position: fixed;
  bottom: 3.5rem;
  right: 3.5rem;
  font-size: 3rem;

  text-align: center;

  z-index: 1000 !important;
  mix-blend-mode: difference;

  &:hover {
    background-color: #222;
  }

  cursor: pointer;
  // cursor: none;

  animation: fade 2s ease;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.nav-link-button-playing {
  background-color: rgb(255, 208, 0);
}

.nav-link:visited .nav-link-button {
  border: 0.2rem solid #222;

  &:hover {
    background-color: #222;
  }
}

.nav-link .hud-post,
.nav-link:visited .hud-post {
  border-color: #999;

  &:hover {
    background-color: #999;
  }
}

@media only screen and (min-width: 2500px) {
  :root {
    font-size: 28px !important;
  }
}

@media only screen and (min-width: 2300px) and (max-width: 2500px) {
  :root {
    font-size: 26px !important;
  }
}

@media only screen and (min-width: 2100px) and (max-width: 2300px) {
  :root {
    font-size: 24px !important;
  }
}

@media only screen and (min-width: 1900px) and (max-width: 2100px) {
  :root {
    font-size: 22px !important;
  }
}

@media only screen and (min-width: 1700px) and (max-width: 1900px) {
  :root {
    font-size: 20px !important;
  }
}

@media only screen and (min-width: 1500px) and (max-width: 1700px) {
  :root {
    font-size: 18px !important;
  }
}

@media only screen and (min-width: 1300px) and (max-width: 1500px) {
  :root {
    font-size: 16px !important;
  }
}

@media only screen and (min-width: 1000px) and (max-width: 1300px) {
  :root {
    font-size: 14px !important;
  }
}

@media only screen and (min-width: 800px) and (max-width: 1000px) {
  :root {
    font-size: 15px !important;
  }
}

@media only screen and (min-width: 550px) and (max-width: 800px) {
  :root {
    font-size: 14px !important;
  }
}

@media only screen and (min-width: 400px) and (max-width: 550px) {
  :root {
    font-size: 13px !important;
  }
}

@media only screen and (max-width: 400px) {
  :root {
    font-size: 12px !important;
  }
}

@media only screen and (max-width: 360px) {
  :root {
    font-size: 11px !important;
  }
}

@media only screen and (max-width: 320px) {
  :root {
    font-size: 10px !important;
  }
}

@media only screen and (max-width: 850px) {
  :root {
    .nav-path {
      display: none;
    }
  }
}

.overlay {
  width: 100vw;
  height: 100vh;

  position: fixed;
  bottom: -100vh;

  background: #ff9900;
}
</style>
