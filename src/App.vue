<template>
  <div class="app size-fill-viewport">
    <keep-alive include="home" exclude="post">
      <router-view />
    </keep-alive>
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
}

.app {
  width: 100vw;
  height: 100vh;
}
</style>
