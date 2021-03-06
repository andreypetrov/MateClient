// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import {
  Modal,
  Tabs,
  Collapse,
  Card,
  Button,
  ListGroup,
  Form,
  FormGroup,
  FormSelect,
  FormCheckbox,
  FormRadio,
  FormInput,
  FormTextarea,
  Table} from 'bootstrap-vue/es/components';
import App from './App';
import './assets/styles.scss';
import router from './router';
import store from './store/';

Vue.use(Modal);
Vue.use(Tabs);
Vue.use(Collapse);
Vue.use(Card);
Vue.use(Button);
Vue.use(Table);
Vue.use(ListGroup);
Vue.use(FormGroup);
Vue.use(FormSelect);
Vue.use(FormCheckbox);
Vue.use(FormRadio);
Vue.use(Form);
Vue.use(FormInput);
Vue.use(FormTextarea);

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
