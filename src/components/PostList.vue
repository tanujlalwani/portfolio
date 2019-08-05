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
      <img class="post-list-item-image" src="@/assets/posts/{{post}}/cover.svg" type="image/svg" />
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: ["the-aditi-wall", "reach-out-of-the-box", "binary", "artwork"]
    };
  }
};
</script>
