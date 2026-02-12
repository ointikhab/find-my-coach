import {createStore} from 'vuex'
import products from './modules/products';
import auth from './modules/auth'

const store = createStore({
    modules: {
        products,
        auth,
    },
    

})

export default store; 