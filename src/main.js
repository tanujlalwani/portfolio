import Vue from 'vue';
import App from './App.vue';
import router from './router';

import checkView from 'vue-check-view';
Vue.use(checkView);

import MarqueeText from 'vue-marquee-text-component';
Vue.component('marquee-text', MarqueeText);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
