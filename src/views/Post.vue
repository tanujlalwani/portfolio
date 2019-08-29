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
  height: 98vh;
  widows: 100vw;

  margin: 0 auto;
  margin-bottom: 6rem;
  p,
  img {
    width: 100%;
    height: 100%;
    // height: 50rem;
    object-fit: cover;
  }

  hr {
    position: relative;
    top: -6px;

    height: 6px;
    width: 105vw;
    background-image: linear-gradient(to right, #fff 45%, rgba(0, 0, 0, 1) 0%);
    background-position: bottom;
    background-size: 2.5em 5px;
    background-repeat: repeat-x;

    border: none;
    margin: 0;
  }
  // border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='110'%3E%3Crect width='20' height='.5' style='stroke-width:3;stroke:%23D8D8D8' /%3E%3C/svg%3E")
  //   27 23 / 50px 30px / 1rem round space;
}

.post-body {
  display: grid;
  grid-template-columns: minmax(0px, 4fr) [header-start] 2fr [header-end text-start] 6fr [text-end] minmax(
      0px,
      4fr
    );
  gridwidth: 100%;

  // display: flex;
  // flex-flow: column nowrap;
  // align-items: center;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    grid-column: header-start/header-end;
    margin-right: 1rem;
  }

  p {
    grid-column: text-start/text-end;
    margin-bottom: 1.5rem;
  }

  .introduction {
    color: #0050ff;
    font-size: 1.4rem;
    font-weight: var(--font-weight-bold);
    line-height: 1.5;
    grid-column: header-start/text-end;

    // border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='110'%3E%3Crect width='20' height='.5' style='stroke-width:3;stroke:%23D8D8D8' /%3E%3C/svg%3E")
    //   27 23 / 50px 30px / 1rem round space;
  }

  .image,
  hr {
    grid-column: 1/13;
  }

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
    // width: 33rem;
  }

  ul {
    list-style-type: circle;
  }

  li {
    margin-top: 0;
  }

  h1 {
    font-weight: 800;
    font-size: 1rem;
  }

  h2 {
    font-weight: 700;
    font-size: 1rem;
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
    margin: 6rem auto;
    height: 1px;
    width: 105vw;

    opacity: 0.3;
    background-image: linear-gradient(to right, #000 35%, #fff 0%);
    background-position: bottom;
    background-size: 2em 1px;
    background-repeat: repeat-x;

    border: none;
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
</style>
