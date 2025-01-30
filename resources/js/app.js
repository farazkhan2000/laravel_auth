import "./bootstrap";
import router from "./router/router";
import { createApp } from "vue";
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import App from "./App.vue";
import store from "./store/index";

createApp(App).use(router).use(store).use(ToastPlugin).mount("#app");

