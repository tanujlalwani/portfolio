<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <article v-html="body"></article>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import body from "@/assets/reach-out-of-the-box/post.md";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      body
    };
  }
};
</script>
