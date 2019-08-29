<template>
  <div class="toc" :class="{ 'toc-visible': tocVisible }"></div>
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
@import "../styles/tocbot.scss";

.toc {
  display: none;
}

.toc-visible {
  display: block;
}
</style>
