<template>
  <section class="posts size-fill-viewport" @mouseleave="updatePostView(null)">
    <div class="marquee-wrapper">
      <marquee-text class="marquee-work" :repeat="8" :duration="20" paused>
        WORK
        <span class="strikethrough">IN PROGRESS</span>&nbsp;•&nbsp;
      </marquee-text>
    </div>
    <div class="posts-list">
      <router-link
        class="posts-list-link"
        v-for="post in posts"
        v-bind:key="post.id"
        :to="{
        name: 'post',
        params: { title: post.path },
      }"
      >
        <div class="posts-list-link-content" @mouseover="updatePostView(post)">
          <h1 class="posts-list-item-title">
            {{post.title}}
            <span class="arrow">-></span>
          </h1>
          <span class="posts-list-item-tags">{{ stringifyPostTags(post.tags) }}</span>
        </div>
      </router-link>
    </div>
    <div class="post-cover-background">
      <post-cover v-if="currentPost != null" v-bind:post="currentPost"></post-cover>
    </div>
    <video
      v-show="showNoise"
      id="noise"
      class="noise"
      preload="auto"
      playsinline
      muted
      autoplay
      loop
      :src="getNoiseSrc()"
      type="video/mp4"
    ></video>
    <!-- <audio id="click" volume="0.1">
      <source :src="clickSrc" type="audio/mp3" />
    </audio>-->
  </section>
</template>

<script>
import PostCover from "@components/PostCover.vue";

import Posts from "@posts/posts.json";

export default {
  name: "posts",
  components: {
    PostCover
  },
  data() {
    return {
      posts: Posts.posts,
      currentPost: null,
      noiseSrc: null,
      showNoise: false
      // clicks: 0
      // audioObj: null
    };
  },
  methods: {
    stringifyPostTags(tagsList) {
      var string = "";
      for (let tag of tagsList) {
        string = string + tag + ", ";
      }
      return string.slice(0, -2);
    },
    updatePostView(currentPost) {
      if (this.currentPost != currentPost) {
        // this.audioObj.play();
        // this.clicks = (this.clicks + 1) % 4;
        this.showNoise = true;
        this.currentPost = currentPost;
        setTimeout(() => {
          this.showNoise = false;
        }, 600);
      }
    },
    getNoiseSrc(path) {
      return require("../assets/noise.mp4");
    }
  }
  // computed: {
  //   clickSrc(path) {
  //     return require("../assets/sounds/click_" + this.clicks + ".mp3");
  //   }
  // },
  // mounted() {
  //   this.audioObj = document.getElementById("click");
  //   this.audioObj.volume = 0.5;
  // }
};
</script>

<style lang="scss">
.marquee-wrapper {
  user-select: none;
  background-color: #fff;

  padding: 1rem 0;
  grid-row: 1/2;
  grid-column: 1/13;

  border-bottom: 0.2rem solid #000;

  .marquee-work {
    color: #000;
    font-size: 2rem;
  }

  .strikethrough {
    text-decoration: underline;
    text-decoration-line: line-through;
  }
}

.posts {
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: fit-content(10rem) repeat(9, 1fr);

  overflow: hidden;

  border: 0.2rem solid #000;

  .posts-list {
    grid-column: 1/5;
    grid-row: 2/11;

    overflow-y: scroll;

    background-color: #ffcc00;

    .posts-list-link {
      text-decoration: none;
      color: black;

      .posts-list-link-content {
        padding: 2rem;
        border-bottom: 0.2rem solid #000;
        font-variant-ligatures: contextual;

        .posts-list-item-title {
          height: auto;
          font-size: 1.7rem;
          font-weight: bold;
          margin-bottom: 0.6rem;

          .arrow {
            display: none;
            letter-spacing: 0;
            vertical-align: text-bottom;
            padding-left: 0.25rem;
          }
        }

        .posts-list-item-tags {
          font-size: 1rem;
          font-style: italic;
          // font-weight: bold;
        }
      }
    }

    /* Custom Style Scrollbar */

    &::-webkit-scrollbar {
      width: 1rem;
    }

    &::-webkit-scrollbar-track {
      background: #ffcc00;
      border-left: 0.2rem solid #000;
      border-right: 0.2rem solid #000;
    }

    &::-webkit-scrollbar-thumb {
      background: #000;
    }
  }

  .post-cover-background {
    grid-column: 5/13;
    grid-row: 2/11;

    background-color: #ffcc00;
  }

  .noise {
    grid-column: 5/13;
    grid-row: 2/11;

    width: 100%;
    height: 100%;

    object-fit: cover;
  }
}

@media only screen and (max-width: 800px) {
  .posts {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows:
      [marquee-start] fit-content(10vh)
      [marquee-end view-start] 1fr [view-end list-start] fit-content(25vh)
      [list-end];

    .marquee-work {
      grid-column: span 1;
      grid-row: marquee-start/marquee-end;
    }

    .posts-list {
      grid-column: span 1;
      grid-row: list-start/list-end;

      width: 100vw;

      display: flex;
      flex-flow: row nowrap;
      scroll-snap-type: x mandatory;

      overflow-y: hidden;
      overflow-x: scroll;

      .posts-list-link {
        scroll-snap-align: start;

        .posts-list-link-content {
          width: 100vw;
          border: 0.2rem solid #000;
          border-left: 0px;

          .posts-list-item-title {
            height: auto;
            font-size: 2rem;

            .arrow {
              display: none;
            }
          }
          .posts-list-item-tags {
            font-size: 1.5rem;
          }
        }
      }
    }

    .post-cover-background {
      grid-column: 1/2;
      grid-row: 2/3;
    }

    .noise {
      grid-column: 1/2;
      grid-row: 2/3;
    }
  }
}

@keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(1rem);
    transform: translateX(1rem);
  }
}
</style>
