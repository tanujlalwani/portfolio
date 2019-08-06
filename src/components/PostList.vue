<template>
  <div class="post-list">
    <router-link
      v-for="(post, index) in posts"
      v-bind:key="index"
      class="post-list-item"
      :to="{
        name: 'post',
        params: { title: post}
      }"
    >
      <img class="post-list-item-image" :src="getCover(post)" type="image/svg" />
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: ["the-aditi-wall", "reach-out-of-the-box", "binary", "artwork"]
    };
  },
  methods: {
    getCover(title) {
      return require("../assets/posts/" + title + "/cover.svg");
    }
  }
};
</script>

<style lang="scss">

.post-list {
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  // scroll-snap-type: y mandatory;
}

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
