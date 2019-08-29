<template>
  <div class="toc display-flex-column" :class="{ 'toc-visible': tocVisible }"></div>
</template>

<script>
import { EventBus } from "../event-bus.js";

import tocbot from "tocbot";

export default {
  data() {
    return {
      tocVisible: false
    };
  },
  created() {
    EventBus.$on("toc-clicked", () => {
      this.tocVisible = !this.tocVisible;
    });
  },
  mounted() {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".post-body",
      headingSelector: "h1, h2",
      activeLinkClass: "is-active-link",
      hasInnerContainers: true,
      scrollSmoothDuration: 420,
      headingsOffset: 1,
      throttleTimeout: 50
    });
  },
  beforeDestroy() {
    EventBus.$off("toc-clicked", () => {});
  }
};
</script>

<style lang="scss">
.toc {
  --toc-width: 30vw;
  height: 100vh;
  width: var(--toc-width);
  max-width: var(--toc-width);

  position: fixed;
  top: 0;
  left: calc(var(--toc-width) * -1);

  z-index: 900;
  overflow-y: auto;

  transition: all 200ms ease-in-out;

  .toc-list {
    height: 70vh;
    padding: 5vw;

    background-color: var(--background-color-default);
    border: var(--border-default);
    list-style: none;

    overflow: hidden;
    display: block;
    margin: auto;

    li {
      .toc-link {
        text-decoration: none;
        height: 100%;
      }

      .is-active-link {
        font-weight: 700;
      }
    }
  }
}

.toc-visible {
  left: 0;
}
</style>
