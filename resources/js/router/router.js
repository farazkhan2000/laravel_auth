import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/register",
        component: () => import("../components/auth/Register.vue"),
    },
    {
        path: "/login",
        component: () => import("../components/auth/Login.vue"),
    },
    {
        path: "/",
        component: () => import("../pages/Home.vue"),
    },
    {
        path: "/dashboard",
        component: () => import("../pages/Dashboard.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});