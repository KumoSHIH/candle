import Vue from 'vue';
import Router from 'vue-router';

//Back
import Dashboard from '@/components/Dashboard';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
import Orders from '@/components/pages/Orders';
import Coupon from '@/components/pages/Coupon';
import CustomerOrder from '@/components/pages/CustomerOrders';
import CustomerCheckout from '@/components/pages/CustomerCheckout';
//front
import HomeRouter from '@/components/HomeRouter';//進入點
import Home from '@/components/pages/Home';
import List from '@/components/pages/List';
import ItemPage from '@/components/pages/ItemPage';
import Cart from '@/components/pages/Cart';
import CartAddress from '@/components/pages/CartAddress';
import CartPay from '@/components/pages/CartPay';
import CartFin from '@/components/pages/CartFin';
import Bulletin from '@/components/pages/Bulletin';//公告

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: "HomeRouter",
      component: HomeRouter,
      children:[
        {
          path: '/',
          name: "Home",
          component: Home,
        },
        {
          path: 'list',
          name: "List",
          component: List,
        },
        {
          path: 'item_page/:itemID',
          name: "ItemPage",
          component: ItemPage,
        },
        {
          path: 'cart',
          name: "Cart",
          component: Cart,
        },
        {
          path: 'cart_address',
          name: "CartAddress",
          component: CartAddress,
        },
        {
          path: 'cart_pay/:orderID',
          name: "CartPay",
          component: CartPay,
        },
        {
          path: 'cart_fin',
          name: "CartFin",
          component: CartFin,
        },
        {
          path: 'bulletin',
          name: "Bulletin",
          component: Bulletin,
        },
      ]
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
