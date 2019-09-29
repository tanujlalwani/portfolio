import Vue from 'vue';
import Router from 'vue-router';

import Posts from '@posts/posts.json';

Vue.use(Router);

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

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
      component: loadView('Home')
    },
    {
      path: '/post/:title',
      name: 'post',
      meta: { index: 1 },
      component: loadView('Post'),
      props: route => ({
        post: Posts.posts.filter(post => route.params.title == post.path)[0]
      })
    }
  ]
});
