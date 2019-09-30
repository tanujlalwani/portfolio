<template>
  <div class="post" :theme="theme">
    <post-cover class="post-header" id="cover" v-bind:post="post"></post-cover>
    <hr class="cover-divider" />
    <article class="post size-fill-viewport">
      <div class="post-body" v-html="body"></div>
    </article>
  </div>
</template>

<script>
import PostCover from "@components/PostCover.vue";

import { EventBus } from "../event-bus.js";

export default {
  name: "post",
  components: {
    PostCover
  },
  data() {
    return {
      title: this.post.path,
      theme: this.post.theme,
      body: null
    };
  },
  props: ["post"],
  created() {
    this.body = require("../assets/posts/" + this.title + "/post.md");
  },
  mounted() {
    document.getElementById("cover").className += " full-cover";
    EventBus.$emit("post-opened");
  }
};
</script>

<style lang="scss">
@import "../styles/post-themes.scss";

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

  margin: 0 auto 4rem auto;
  border: none;

  // using background-image gradient to create a customizable dashed border
  background-image: linear-gradient(
    to right,
    var(--background-color) 45%,
    rgba(0, 0, 0, 0) 0%
  );
  background-position: bottom;
  background-size: var(--divider-dash-width) var(--divider-dash-height);
  background-repeat: repeat-x;
}

/* Post Body - CSS Grid Layout */
.post {
  background-color: var(--background-color);
}

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
  h6,
  p,
  ul,
  li {
    color: var(--text-color);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    grid-column: header-start/header-end;
    padding-top: 1.5rem;
  }

  h2#introduction {
    grid-row: 1;
  }

  p {
    grid-column: text-start/text-end;
    padding-top: 1.5rem;
  }

  .image-caption {
    grid-column: body-start/body-end;
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

  .post-footer {
    margin: 4rem auto;
  }
}

/* Post Body - Styling */
.post-body {
  h1 {
    font-weight: var(--font-weight-bold);
    font-size: 1.4rem;
  }

  h2 {
    font-weight: var(--font-weight-bold);
    font-size: 1rem;
  }

  h1:focus,
  h2:focus {
    outline: 0;
    text-decoration: underline;
  }

  h3 {
    font-size: 0.95rem;
    font-style: italic;
  }

  h4 {
    color: var(--text-color-light);
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
    color: var(--introduction-color);

    font-size: 1.4rem;
    font-weight: var(--font-weight-bold);
    margin-bottom: 2rem;
  }

  hr {
    overflow: hidden;

    height: 0.11rem;
    width: 105vw;

    margin: 5rem auto 4rem auto;

    border: none;

    // using background-image gradient to create a customizable dashed border
    background-image: linear-gradient(
      to right,
      var(--divider-color) 35%,
      rgba(0, 0, 0, 0) 0%
    );
    background-position: bottom;
    background-size: 2rem 0.11rem;
    background-repeat: repeat-x;
  }
}

.image,
.video {
  margin-top: 6rem;

  p {
    width: 100%;
    padding: 0;
    margin: 0;

    img {
      width: 100%;
    }
  }

  iframe {
    width: 100%;
  }
}

.image-caption {
  font-size: 0.9rem;
  color: var(--text-color-light);

  text-align: center;
}

// Image Size Types

.image-width-text {
  grid-column: text-start/text-end;
  margin: 3rem auto 1rem auto;
}

.video-width-text {
  grid-column: text-start/text-end;
}

.video-width-body,
.image-width-body {
  grid-column: body-start/body-end;
}

.video-width-full,
.image-width-full {
  grid-column: page-start/page-end;
}

.image-inline {
  margin: 3rem auto 2rem auto;
}

.video-height-small iframe {
  height: 40vh;
}

.video-height-medium iframe {
  height: 60vh;
}

.video-height-large iframe {
  height: 85vh;
}

// Image Group Type

.image-group-horizontal {
  width: 100%;
  height: 100%;

  p {
    width: 100%;

    display: flex;
    flex-flow: row wrap;
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

.image-rounded img {
  border-radius: 0.5rem;
}

/* Media Queries */

@media only screen and (min-width: 1000px) and (max-width: 1400px) {
  .post-body {
    grid-template-columns:
      [page-start]
      minmax(0px, 2.5fr)
      [body-start]
      minmax(0px, 1fr)
      [header-start]
      2.5fr
      [header-end]
      0.35fr
      [text-start]
      7fr
      [text-end]
      minmax(0px, 1fr)
      [body-end]
      minmax(0px, 2.5fr)
      [page-end];
  }
}

@media only screen and (min-width: 800px) and (max-width: 1000px) {
  .post-body {
    grid-template-columns:
      [page-start]
      minmax(0px, 1.5fr)
      [body-start]
      minmax(0px, 1fr)
      [header-start]
      3fr
      [header-end]
      0.35fr
      [text-start]
      7fr
      [text-end]
      minmax(0px, 1fr)
      [body-end]
      minmax(0px, 1.5fr)
      [page-end];
  }

  .video-width-body,
  .image-width-body {
    grid-column: page-start/page-end;
  }

  .video-width-text,
  .image-width-text {
    grid-column: body-start/body-end;
    margin-bottom: 0;
  }
}

@media only screen and (min-width: 700px) and (max-width: 800px) {
  .post-body {
    grid-template-columns:
      [page-start]
      minmax(0px, 1fr)
      [body-start]
      minmax(0px, 1fr)
      [header-start]
      2.5fr
      [header-end]
      0.35fr
      [text-start]
      7fr
      [text-end]
      minmax(0px, 1fr)
      [body-end]
      minmax(0px, 1fr)
      [page-end];
  }

  .video-width-body,
  .image-width-body {
    grid-column: page-start/page-end;

    .image-width-body.image-rounded {
      img {
        border-radius: 0;
      }
    }
  }

  .video-width-text,
  .image-width-text {
    grid-column: body-start/body-end;
    margin-bottom: 0;
  }
}

@media only screen and (max-width: 700px) {
  .post-body {
    grid-template-columns:
      [page-start]
      2fr
      [body-start]
      8fr
      [body-end]
      2fr
      [page-end];

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      grid-column: body-start/body-end;
    }

    h2#introduction {
      grid-row: 1;
    }

    p {
      grid-column: body-start/body-end;
      padding-top: 1.5rem;
    }

    .image-caption {
      grid-column: body-start/body-end;
    }

    ul {
      grid-column: body-start/body-end;
    }

    .introduction {
      grid-column: body-start/body-end;
    }

    hr {
      grid-column: page-start/page-end;
      margin: 3rem 0;
    }

    .video-width-text,
    .image-width-text {
      grid-column: page-start/page-end;
      margin: 1rem 0;

      .image-width-text.image-rounded {
        img {
          border-radius: 0;
        }
      }
    }

    .video-width-body,
    .image-width-body {
      grid-column: page-start/page-end;
      margin: 2rem 0;

      .image-width-body.image-rounded {
        img {
          border-radius: 0;
        }
      }
    }

    .video-width-full,
    .image-width-full {
      margin: 2rem auto 0 auto;
    }

    .image-inline {
      margin: 1rem auto;
    }

    .image-group-horizontal {
      p {
        flex-flow: column wrap;

        img {
          width: 100%;
        }
      }
    }

    h1 {
      font-size: 1.4rem;
    }

    h2,
    h3,
    h4,
    p,
    li {
      font-size: 1.2rem;
    }

    ul {
      margin-left: 3rem;
    }

    .introduction {
      font-size: 1.2rem;
    }
  }
}

@media only screen and (max-width: 500px) {
  .post-body {
    grid-template-columns:
      [page-start]
      1fr
      [body-start]
      8fr
      [body-end]
      1fr
      [page-end];

    h1 {
      font-size: 1.6rem;
    }

    h2,
    h3,
    h4,
    p,
    li {
      font-size: 1.4rem;
    }

    ul {
      margin-left: 2rem;
    }

    .introduction {
      font-size: 1.4rem;
    }

    .post-footer {
      margin: 4rem auto;
    }
  }
}
</style>
