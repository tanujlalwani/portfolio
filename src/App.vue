<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style>
/* Font Imports */

@import url("https://fonts.googleapis.com/css?family=Space+Mono&display=swap");
@import url("https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap");

/* Font Settings */

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* CSS Reset */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
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
