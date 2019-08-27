<template>
  <div class="app size-fill-viewport">
    <router-view />
    <hud></hud>
  </div>
</template>

<script>
import HUD from "@components/HUD.vue";
export default {
  components: {
    hud: HUD
  }
};
</script>

<style>
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
  font-size: 16px;

  --background-color-default: #fff;
  --accent-color: #ff9900;
  --accent-color-text: #fff;

  --font-family: "Space Mono", monospace;
  --font-style-default: normal;
  --font-weight-normal: 400;
  --font-weight-bold: 800;
  --font-color-default: #000;

  --font-line-height-default: 1.3;
  --font-letter-spacing-default: 0;
  --font-word-spacing-default: -0.2rem;
  --font-variant-ligatures: none;

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
}

.app {
  width: 100vw;
  height: 100vh;

  /* border: 3px solid #fff; */
}
</style>
