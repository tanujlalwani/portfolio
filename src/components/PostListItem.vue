<template>
  <router-link
    class="post-list-item scroll-snap-start"
    :to="{
        name: 'post',
        params: { title: post.path },
      }"
  >
    <post-cover v-bind:post="post"></post-cover>
  </router-link>
</template>

<script>
import { EventBus } from "../event-bus.js";

import PostCover from "@components/PostCover.vue";

export default {
  name: "post-list-item",
  components: {
    PostCover
  },
  data() {
    return {
      isVisible: false
    };
  },
  props: ["index", "post"]
};
</script>

<style lang="scss">
.post-list-item {
  width: 100%;
  height: 100vh;

  scroll-snap-align: start;
  overflow: hidden;
}
</style>
