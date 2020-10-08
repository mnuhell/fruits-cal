import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home.vue';
import Fruits from './views/Fruits.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Home
    },

    {
        path: "/frutas",
        component: Fruits
    }
];

const router = new VueRouter({
    mode: "history",
    routes
  });

export default router;