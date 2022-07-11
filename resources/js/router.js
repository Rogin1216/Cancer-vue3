import { createWebHistory, createRouter } from "vue-router";
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';

const routes = 
[
    {path: "/login",
    component: Login},

    {path: "/signup", 
    component: Signup}
];

const router =  ({
    history: createWebHistory(),
    routes, 
});

export default router;