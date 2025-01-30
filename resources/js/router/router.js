import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index.js"; // Import your Vuex store

const routes = [
    {
        path: "/register",
        name: "Register",
        component: () => import("../components/auth/Register.vue"),
        meta: { requiresGuest: true } // Only accessible to guests (non-authenticated users)
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../components/auth/Login.vue"),
        meta: { requiresGuest: true } // Only accessible to guests
    },
    {
        path: "/",
        name: "Home",
        component: () => import("../pages/Home.vue"),
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../pages/Dashboard.vue"),
        meta: { requiresAuth: true } // Only accessible to authenticated users
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Route guard to check authentication status
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth); // Check if the route requires authentication
    const requiresGuest = to.matched.some(record => record.meta.requiresGuest); // Check if the route requires a guest (non-authenticated user)
    const isAuthenticated = store.getters.isAuthenticated; // Check if the user is authenticated (via Vuex)

    if (requiresAuth && !isAuthenticated) {
        console.log('requiresAuth && !isAuthenticated: ', requiresAuth && !isAuthenticated);
        // If the route requires authentication and the user is not authenticated, redirect to login
        next({ name: "Login" });
    } else if (requiresGuest && isAuthenticated) {
        console.log('requiresGuest && isAuthenticated: ', requiresGuest && isAuthenticated);
        // If the route requires a guest and the user is authenticated, redirect to dashboard
        next({ name: "Dashboard" });
    } else {
        // Otherwise, allow navigation
        next();
    }
});

export default router;