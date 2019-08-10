<template>
  <router-link
    class="post-list-item"
    :to="{
        name: 'title',
        params: { title: title}
      }"
  >
    <img class="post-list-item-image" :src="getCover(title)" type="image/svg" />
  </router-link>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  },
  methods: {
    getCover(title) {
      return require("../assets/posts/" + title + "/cover.svg");
    }
  }
};
</script>

<style lang="scss">
.post-list-item {
  height: 50vh;
  margin: 3% 3% 0 3%;

  &:last-child {
    margin-bottom: 3%;
  }

  background-color: hsl(0, 0, 0);

  opacity: 0.5;
  transition: 0.7s opacity;

  &:hover {
    opacity: 1;
  }

  .post-list-item-image {
    height: 100%;
    width: 100%;

    object-fit: contain;
  }
}
</style>
