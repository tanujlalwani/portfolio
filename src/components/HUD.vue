<template>
  <div class="hud size-fill-viewport user-select-none">
    <span class="circle"></span>
    <span class="section">tangerine v0.1</span>
    <span class="time" @click="emitClickEvent()">10:1234:143/90</span>
  </div>
</template>

<script>
import { EventBus } from "../event-bus.js";

export default {
  methods: {
    emitClickEvent() {
      EventBus.$emit("toc-clicked");
    }
  }
};
</script>

<style>
.hud {
  pointer-events: none;
  z-index: 1000;
}

.time {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;

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
  z-index: 1000;

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
  z-index: 1000;

  position: fixed;
  bottom: 0;
  right: 0;

  margin: 3em;

  border: 2px solid var(--accent-color-text);
  mix-blend-mode: difference;

  pointer-events: auto;
}
</style>
