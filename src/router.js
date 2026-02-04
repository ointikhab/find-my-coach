import {createRouter, createWebHistory} from 'vue-router'

import CoachDetails from './pages/coaches/CoachesDetails.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachesRegistration from './pages/coaches/CoachesRegistration.vue'

import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestRcved from './pages/requests/RequestRcved.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: CoachesList},
        {
            path: '/coaches/:id', 
            component: CoachDetails,
            children: [
                {path: 'contact', component: ContactCoach}
            ]
        },
        {path: '/register-coach', component: CoachesRegistration},
        {path: '/request-recieved', component: RequestRcved},
        {path: ':/notFound(.*)'}
    ]
})

export default router