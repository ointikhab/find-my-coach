import {createRouter, createWebHistory} from 'vue-router'

import CoachDetails from './pages/coaches/CoachDetails.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachesRegistration from './pages/coaches/CoachesRegistration.vue'

import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestRcved from './pages/requests/RequestRcved.vue'
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
        {path: '/coaches', component: CoachesList},
        {
            path: '/coaches/:id', 
            props: true,
            component: CoachDetails,
            children: [
                {path: 'contact', component: ContactCoach}
            ]
        },
        {path: '/register', component: CoachesRegistration},
        {path: '/requests', component: RequestRcved},
        {path: '/:notFound(.*)', component: NotFound}
    ]
})

export default router