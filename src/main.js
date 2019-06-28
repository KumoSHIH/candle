// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App';
import router from './router';
import './bus';
import currencyFilter from "./filters/currency";


Vue.config.productionTip = false;
Vue.use(VueAxios,axios);
axios.defaults.withCredentials = true;

Vue.component("Loading", Loading); //全域方式載入此元件
Vue.filter('currency', currencyFilter);

library.add(faSignInAlt,faUserPlus);
Vue.component('font-awesome-icon', FontAwesomeIcon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

router.beforeEach((to, from, next) => {
  console.log('to',to,'from',from,'next',next);
  if(to.meta.requiresAuth){ //需要驗證的時候
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((response) => { //this 在元件下才可以使用(目前在router下) 所以要改用axios
      console.log(response.data);
      if(response.data.success){
        next();
      }else{
        next({
          path: '/login'
        })
      }
    });
  }else{ //不須驗證or已驗證就直接放行
    next();
  }
})
