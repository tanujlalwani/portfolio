<template>
  <div class="home">
    <hero></hero>
    <post-list></post-list>
  </div>
</template>

<script>
import Hero from "@components/Hero.vue";
import PostList from "@components/PostList.vue";

export default {
  components: {
    "post-list": PostList,
    hero: Hero
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>
