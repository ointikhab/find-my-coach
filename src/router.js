import {createRouter, createWebHistory} from 'vue-router'
import store from './store';

import NotFound from './pages/NotFound.vue'

import ProductList from './pages/products/ProductList.vue'
import ProductDetails from './pages/products/ProductDetails.vue'
import AddProduct from './pages/products/AddProduct.vue'
import Login from './pages/Login.vue'
import Admin from './pages/Admin.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', redirect: '/products'},
        {path: '/add-product',component: AddProduct },
        {path: '/products', component: ProductList},
        {
            path: '/products/:id', 
            props: true,
            component: ProductDetails,
        },
        { path: '/login', component: Login },
        {
            path: '/admin',
            component: Admin,
            meta: { requiresAuth: true }
        },
        {path: '/:notFound(.*)', component: NotFound}
    ]
})


router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['auth/isAuthenticated']

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})


export default router