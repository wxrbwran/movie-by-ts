import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import '@/assets/css/reset.css';

// Vue.config.productionTip = false;
Vue.config.errorHandler = function (err, vm, info) {
  console.log('@err:  ', err);
  console.log('@vm:  ', vm);
  console.log('@info:  ', info);
};
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
