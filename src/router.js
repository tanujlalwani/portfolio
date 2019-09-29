import Vue from 'vue';
import Router from 'vue-router';
import Home from '@views/Home.vue';
import Post from '@views/Post.vue';

import Posts from '@posts/posts.json';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { index: 0 },
      component: Home
    },
    {
      path: '/post/:title',
      name: 'post',
      meta: { index: 1 },
      component: Post,
      props: route => ({
        post: Posts.posts.filter(post => route.params.title == post.path)[0]
      })
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
});
