<template>
  <section class="posts size-fill-viewport" @mouseleave="updatePostView(null)">
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
.posts {
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(1, 1fr);

  overflow: hidden;

  border: 0.2rem solid #000;

  .posts-list {
    grid-column: 1/5;
    grid-row: 1/2;

    overflow-y: scroll;

    background-color: #ffcc00;

    .posts-list-link {
      text-decoration: none;
      color: black;

      .posts-list-link-content {
        padding: 2.5rem;
        border-bottom: 0.2rem solid #000;
        font-variant-ligatures: contextual;

        .posts-list-item-title {
          height: 1.8rem;
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
  }

  .post-cover-background {
    grid-column: 5/13;
    grid-row: 1/2;

    background-color: #ffcc00;
  }
}

.posts-list-link-content:hover {
  background-color: #fff;

  .posts-list-item-title,
  .posts-list-item-tags {
    color: #000;
  }

  .posts-list-item-title {
    text-decoration: underline;

    .arrow {
      display: inline-block !important;
      animation: slide-right 2s ease-in-out infinite alternate;
    }
  }
}

.noise {
  grid-column: 5/13;
  grid-row: 1/2;

  width: 100%;
  height: 100%;

  object-fit: cover;
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

.posts-list::-webkit-scrollbar {
  width: 1rem;
}

/* Track */
.posts-list::-webkit-scrollbar-track {
  background: #ffcc00;
  border-left: 0.2rem solid #000;
  border-right: 0.2rem solid #000;
}

/* Handle */
.posts-list::-webkit-scrollbar-thumb {
  background: #000;
}
</style>
