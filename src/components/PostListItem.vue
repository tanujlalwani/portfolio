<template>
  <router-link
    class="post-list-item scroll-snap-start"
    :to="{
        name: 'post',
        params: { title: post.path },
      }"
    v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          threshold: 0.55,
        }
      }"
    :class="{ visible: isVisible }"
  >
    <post-cover v-bind:post="post"></post-cover>
  </router-link>
</template>

<script>
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
  props: ["index", "post"],
  methods: {
    visibilityChanged(isVisible, entry) {
      console.log(entry);
      this.isVisible = isVisible;
    }
  }
};
</script>

<style lang="scss">
.post-list-item {
  width: 100%;
  height: 100vh;

  padding: 1rem;

  scroll-snap-align: start;
  overflow: hidden;
}

.visible {
}
</style>
