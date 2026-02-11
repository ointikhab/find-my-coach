import {createRouter, createWebHistory} from 'vue-router'

import NotFound from './pages/NotFound.vue'

import ProductList from './pages/products/ProductList.vue'
import ProductDetails from './pages/products/ProductDetails.vue'
import AddProduct from './pages/products/AddProduct.vue'

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
        {path: '/:notFound(.*)', component: NotFound}
    ]
})

export default router