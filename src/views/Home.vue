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

<style lang="scss">
.home {
  width: 100vw;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  background-color: #000;

  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
