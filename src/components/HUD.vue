<template>
  <div class="hud size-fill-viewport user-select-none">
    <!-- <span class="circle"></span> -->
    <span class="title" @click="emitClickEvent()">{{ postTitle }}</span>
    <span class="section">tangerine v0.1</span>
  </div>
</template>

<script>
import { EventBus } from "../event-bus.js";

export default {
  data() {
    return {
      postTitle: "10:1234:143/90"
    };
  },
  methods: {
    emitClickEvent() {
      EventBus.$emit("toc-clicked");
    }
  },
  created() {
    EventBus.$on("post-item-visible", title => {
      this.postTitle = title;
    });
  }
};
</script>

<style>
.hud {
  position: fixed;
  pointer-events: none;
  z-index: 1000;

  font-size: 1.2rem;
}

.title {
  position: fixed;
  /* z-index: 1000; */
  text-align: center;
  width: 100vh;
  margin-left: 3rem;

  transform-origin: top left;
  transform: rotate(-90deg);

  mix-blend-mode: difference;

  pointer-events: auto;
}

.section {
  position: fixed;
  top: 0;
  right: 0;
  /* z-index: 1000; */
  text-align: center;
  width: 100vh;
  /* margin-right: -3rem */

  /* transform-origin: top right; */
  transform: rotate(90deg);

  /* color: #bdbdbd; */
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

  border: 2px solid var(--primary-color-text);
  mix-blend-mode: difference;

  pointer-events: auto;
}
</style>
