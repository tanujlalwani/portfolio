<template>
  <div>
    <toc></toc>
    <article class="post size-fill-viewport js-toc-content" v-html="body"></article>
  </div>
</template>

<script>
import TOC from "@components/TOC.vue";

export default {
  components: {
    toc: TOC
  },
  data() {
    return {
      title: this.$route.params.title,
      body: null,
      tocVisible: false
    };
  },
  created() {
    this.body = require("../assets/posts/" + this.title + "/post.md");
  }
};
</script>

<style lang="scss">
.post {
  overflow-y: scroll;
}

.post-header {
  margin: 0 auto;

  img {
    height: 50rem;
    object-fit: contain;
    fill: hsl(0, 0%, 0%);
  }
}

.post-body {
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  li {
    font: normal 400 1rem/1.58 "Space Mono";
    color: inherit;
    letter-spacing: -0.003em;
    word-break: normal;
    word-wrap: normal;
    width: 33rem;
  }

  ul {
    list-style-type: circle;
  }

  li {
    margin-top: 0;
  }

  h1 {
    font-weight: 800;
    font-size: 2rem;
  }

  h2 {
    font-weight: 700;
    font-size: 1.8rem;
  }

  h3 {
    font-weight: 600;
    font-size: 1.4rem;
  }

  h4 {
    font-weight: 500;
    font-size: 1.2rem;
    font-style: italic;
  }

  hr {
    border: 0;
    background: hsl(0, 0%, 0%);
    display: block;
    margin: 2.5rem auto;
  }
}

img {
  display: block;
  margin: 0 auto;
}

.image {
  width: 100%;
  margin-top: 5rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.post-body > .image-with-caption {
  margin-bottom: 0rem;
}

.post-body > .image-caption {
  font-size: 1rem;
  color: #777;
  font-style: italic;
}

/* .image-horizontal > p {
  display: flex;
} */

.image-horizontal > p > img {
  width: auto;
}

.image > p {
  width: 100%;
  padding: 0;
  margin: 0;
}

.post-body img {
  width: 70%;
  display: block;
  margin: 0 auto;
}

.image-light {
  background-color: #fff;
}

.image-dark {
  background-color: rgba(0, 0, 0, 0);
}
</style>
