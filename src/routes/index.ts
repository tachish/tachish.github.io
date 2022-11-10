import { createRouter, createWebHistory } from "vue-router";
import App from "@/App";

const routes = [
    { path: "/", component: App },
];

export const router = createRouter({
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
});
