// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import './assets/theme.scss';
import Loader from './components/loader/';
import LoadingState from './config/loading-state';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    Loader,
  },
  data() {
    return {
      isLoading: false,
    };
  },

  created() {
    LoadingState.$on('toggle', (isLoading) => {
      this.isLoading = isLoading;
    });
  },
});

