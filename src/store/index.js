import {createStore} from 'vuex'
import products from './modules/products';

const store = createStore({
    modules: {
        products,
    },
    state(){
        return {
            userId: 'c3'
        }
    },
    getters: {
        userId(state) {
        return state.userId;
    }
    }

})

export default store; 