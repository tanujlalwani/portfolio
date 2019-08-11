<template>
  <div class="app">
    <router-view />
  </div>
</template>

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
  --background-color-default: #000;
  --accent-color: rgb(223, 69, 22);

  --font-family: "Space Mono", monospace;
  --font-size: 16px;
  --font-style-default: normal;
  --font-weight-normal: 400;
  --font-weight-bold: 800;
  --font-color-default: #fff;

  --font-line-height-default: 1.3;
  --font-letter-spacing-default: 0;
  --font-word-spacing-default: -0.2rem;
  --font-variant-ligatures: none;

  --border-default: 1px solid #fff;

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

.scroll-snap-start {
  scroll-snap-align: start;
}

/* App Layout */

.app {
  width: 100vw;
  height: 100vh;

  border: 3px solid rgb(63, 63, 63);
}
</style>
