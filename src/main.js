// import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from './store';

import BaseCard from '../src/components/base/BaseCard.vue'
import BaseButton from '../src/components/base/BaseButton.vue'
import BaseBadge from '../src/components/base/BaseBadge.vue'


store.dispatch('auth/autoLogin')

const app = createApp(App);

app.use(router);
app.use(store)

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);

app.mount('#app');
