<template>
  <div>
    <toc></toc>
    <post-cover class="post-header" id="cover" v-bind:post="post"></post-cover>
    <hr class="cover-divider" />
    <article class="post size-fill-viewport js-toc-content" v-html="body"></article>
  </div>
</template>

<script>
import TOC from "@components/TOC.vue";
import PostCover from "@components/PostCover.vue";

export default {
  name: "post",
  components: {
    toc: TOC,
    PostCover
  },
  data() {
    return {
      title: this.post.path,
      body: null,
      tocVisible: false
    };
  },
  props: ["post"],
  created() {
    this.body = require("../assets/posts/" + this.title + "/post.md");
  },
  mounted() {
    document.getElementById("cover").className += " full-cover";
  }
};
</script>

<style lang="scss">
// Post Component: Layout
.post {
  overflow-y: scroll;
  overflow-x: hidden;
}

// Post Header: Layout + Styling
.post-header {
  height: 100vh;
  width: 100vw;
  margin: 0 auto;

  p,
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

// Post Cover Divider: Layout + Styling
.cover-divider {
  --divider-dash-width: 2.5rem;
  --divider-dash-height: 0.4rem;

  height: var(--divider-dash-height);
  width: 105vw;

  position: relative;
  top: calc(var(--divider-dash-height) * -1);

  margin: 0 auto 6rem auto;
  border: none;

  // using background-image gradient to create a customizable dashed border
  background-image: linear-gradient(to right, #fff 45%, rgba(0, 0, 0, 0) 0%);
  background-position: bottom;
  background-size: var(--divider-dash-width) var(--divider-dash-height);
  background-repeat: repeat-x;
}

/* Post Body - CSS Grid Layout */
.post-body {
  display: grid;
  grid-template-columns:
    [page-start]
    minmax(0px, 3fr)
    [body-start]
    minmax(0px, 1fr)
    [header-start]
    2.5fr
    [header-end]
    0.35fr
    [text-start]
    6fr
    [text-end]
    minmax(0px, 1fr)
    [body-end]
    minmax(0px, 3fr)
    [page-end];

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    grid-column: header-start/header-end;
    padding-top: 1.5rem;
  }

  p {
    grid-column: text-start/text-end;
    padding-top: 1.5rem;
  }

  ul {
    padding-top: 1.5rem;
    grid-column: text-start/text-end;
    margin: auto 3rem;

    li {
      padding-top: 0.75rem;
    }
  }

  .introduction {
    grid-column: header-start/text-end;
  }

  hr {
    grid-column: page-start/page-end;
  }
}

/* Post Body - Styling */
.post-body {
  h1 {
    font-weight: var(--font-weight-bold);
    font-size: 2rem;
  }

  h2 {
    font-weight: var(--font-weight-bold);
    font-size: 1rem;

    &:focus {
      outline: 0;
      text-decoration: underline;
    }
  }

  h3 {
    font-size: 0.95rem;
    font-style: italic;
  }

  h4 {
    color: var(--font-color-light);
    font-size: 0.9rem;
  }

  p {
    line-height: 1.58;
  }

  ul {
    list-style-type: circle;
  }

  h2#introduction {
    visibility: hidden;
    height: 0px;
    width: 0px;
  }

  .introduction {
    color: #05f;

    font-size: 1.4rem;
    font-weight: var(--font-weight-bold);
    padding: 0;
  }

  hr {
    overflow: hidden;

    height: 0.11rem;
    width: 105vw;

    margin: 6rem auto 5rem auto;

    border: none;

    // using background-image gradient to create a customizable dashed border
    opacity: 0.15;
    background-image: linear-gradient(to right, #000 35%, #fff 0%);
    background-position: bottom;
    background-size: 2rem 0.11rem;
    background-repeat: repeat-x;
  }
}

.image {
  margin-top: 6rem;

  p {
    width: 100%;
    padding: 0;
    margin: 0;

    img {
      width: 100%;
    }
  }
}

.image-width-body {
  grid-column: body-start/body-end;
}

.image-width-full {
  grid-column: page-start/page-end;
}

.image-group-horizontal {
  width: 100%;
  height: 100%;

  padding-bottom: 1.5rem;

  p {
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    img {
      width: 49.25%;
      height: 100%;
      object-fit: cover;
      margin: 0;
    }
  }
}

// .post-body > .image-with-caption {
//   margin-bottom: 0rem;
// }

// .post-body > .image-caption {
//   font-size: 1rem;
//   color: #777;
//   font-style: italic;
// }
</style>
