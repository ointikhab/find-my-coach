import {createStore} from 'vuex'
import coaches from './modules/coaches';
import requests from './modules/requests'
import products from './modules/products';

const store = createStore({
    modules: {
        coaches,
        requests,
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