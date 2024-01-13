import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products/:category/:title',
    name: 'products',
    component: () => import('@/views/ProductsCategory.vue')
  },
  {
    path: '/products/ProductDetails/:ProductId',
    name: 'product-details',
    component: () => import('@/views/ProductDetails.vue')
  },
  {
    path: '/products/CartPage',
    name: 'cart-page',
    component: () => import('@/views/CartPage.vue')
  },
  {
    path: '/CheckoutPage',
    name: 'checkout-page',
    component: () => import('@/views/CheckoutPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes ,
  scrollBehavior(){
    return { top : 0}
  }
})

export default router
