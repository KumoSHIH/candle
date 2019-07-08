import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '@/components/Dashboard';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
import Orders from '@/components/pages/Orders';
import Coupon from '@/components/pages/Coupon';
import CustomerOrder from '@/components/pages/CustomerOrders';
import CustomerCheckout from '@/components/pages/CustomerCheckout';
import Home from '@/components/pages/Home';
import List from '@/components/pages/List';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: "Home",
      component: Home,
      // children:[
      //   {
      //     path: '/list',
      //     name: "List",
      //     component: List,
      //   },
      // ]
    },
    {
      path: '/list',
      name: "List",
      component: List,
    },



    
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children:[
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },//確保進入此頁面之前是需要被驗證的
        },
        {
          path: 'orders',
          name: 'Orders',
          component: Orders,
          meta: { requiresAuth: true },
        },
        {
          path: 'coupon',
          name: 'Coupon',
          component: Coupon,
          meta: { requiresAuth: true },
        },
        
      ]
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children:[
        {
          path: 'customer_order',
          name: 'CustomerOrder',
          component: CustomerOrder,
        },
        {
          path: 'customer_checkout/:orderID',//:order_id
          name: 'CustomerCheckout',
          component: CustomerCheckout,
        },
      ]
    },
  ]
})
