import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import { createPinia } from 'pinia'
import './assets/tailwind.css'


const pinia = createPinia();
createApp(App).use(pinia).use(router).mount('#app');
