import { createApp } from 'vue'
import FruitsApp from './FruitsApp.vue';
import router from "./routers";


createApp({
    
    router,
    render: h => h(FruitsApp)
}).mount('#app')
