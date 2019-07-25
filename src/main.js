// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
//驗證
import VeeValidate from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import VueI18n from 'vue-i18n';

import App from './App';
import router from './router';
import './bus';
import currencyFilter from "./filters/currency";
import dateFilter from './filters/date';
import CandleLoading from './components/CandleLoading';


Vue.config.productionTip = false;
Vue.use(VueAxios,axios);
axios.defaults.withCredentials = true;
Vue.use(VueI18n);

Vue.component("Loading", Loading); //全域方式載入此元件
Vue.filter('currency', currencyFilter);
Vue.filter('date',dateFilter);
Vue.component('CandleLoading',CandleLoading);

/* eslint-disable no-new */
const i18n = new VueI18n({
  locale: 'zhTW'
});
Vue.use(VeeValidate, {
  i18n,
  events: 'input|blur',
  dictionary: {
    zhTW
  }
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  i18n,
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
