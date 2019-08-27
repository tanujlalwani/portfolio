<template>
  <div class="hud size-fill-viewport">
    <span class="circle"></span>
    <span class="section">tangerine v0.1</span>
    <span class="time">10:1234:143/90</span>
  </div>
</template>

<script>
export default {};
</script>

<style>
.hud {
  pointer-events: none;
}

.time {
  position: fixed;
  bottom: 0;
  left: 0;

  margin: 3em;

  transform-origin: top left;
  transform: rotate(-90deg);

  color: #bdbdbd;
  mix-blend-mode: difference;

  pointer-events: auto;
}

.section {
  position: fixed;
  bottom: 50vh;
  right: -100px;

  transform-origin: top left;
  transform: rotate(90deg);

  color: #bdbdbd;
  mix-blend-mode: difference;

  pointer-events: auto;
  user-select: none;
}

.circle {
  height: 2.5rem;
  width: 2.5rem;
  background-color: transparent;
  border-radius: 50%;

  position: fixed;
  bottom: 0;
  right: 0;

  margin: 3em;

  border: 2px solid var(--accent-color-text);
  mix-blend-mode: difference;

  pointer-events: auto;
}
</style>
