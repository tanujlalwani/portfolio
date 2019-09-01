<template>
  <div class="app size-fill-viewport">
    <router-view />
    <span class="section user-select-none" @click="emitClickEvent()">{{ postTitle }}</span>
    <span class="nav user-select-none" @click="emitClickEvent()"></span>
  </div>
</template>

<script>
import { EventBus } from "./event-bus.js";

export default {
  data() {
    return {
      postTitle: "tangerine v0.1"
    };
  },
  methods: {
    emitClickEvent() {
      EventBus.$emit("nav-clicked");
    }
  },
  created() {
    EventBus.$on("post-item-visible", title => {
      this.postTitle = title;
    });
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

  --font-family: "Space Mono", monospace;
  --font-style-default: normal;
  --font-weight-normal: 400;
  --font-weight-bold: 800;
  --font-color-default: #000;
  --font-color-light: #666;

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

.section {
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

.nav {
  width: 2rem;
  height: 2rem;

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

@media only screen and (max-width: 800px) {
  :root {
    .nav,
    .section {
      display: none;
    }
  }
}
</style>
