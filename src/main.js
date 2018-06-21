// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import {Modal} from 'bootstrap-vue/es/components';
import App from './App';
import './assets/styles.scss';
import router from './router';
import store from './store/';

Vue.use(Modal);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
  },
  template: '<App/>',
});
