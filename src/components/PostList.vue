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
