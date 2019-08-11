<template>
  <article class="post" v-html="body"></article>
</template>

<script>
export default {
  created() {
    this.body = require("../assets/posts/" + this.title + "/post.md");
  },
  data() {
    return {
      title: this.$route.params.title,
      body: null
    };
  }
};
</script>

<style lang="scss">
</style>
