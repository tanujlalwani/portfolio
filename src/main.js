import Vue from 'vue';
import App from './App.vue';
import router from './router';

import MarqueeText from 'vue-marquee-text-component';
Vue.component('marquee-text', MarqueeText);

import VueObserveVisibility from 'vue-observe-visibility';
Vue.use(VueObserveVisibility);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
