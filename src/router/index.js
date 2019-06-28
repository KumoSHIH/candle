import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '@/components/Dashboard';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
import Orders from '@/components/pages/Orders';
//import Tickets from '@/components/pages/Tickets';
import CustomerOrder from '@/components/pages/CustomerOrders';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'login',
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
        // {
        //   path: 'tickets',
        //   name: 'Tickets',
        //   component: Tickets,
        //   meta: { requiresAuth: true },
        // },
        
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
      ]
    },
  ]
})
