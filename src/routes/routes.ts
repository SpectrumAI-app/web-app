import Home from "../pages/Home/Home.vue";
import AboutUs from "../pages/AboutUs/AboutUs.vue";
import NewBlogs from "../pages/NewBlogs/NewBlogs.vue";
import Storyblok from "../pages/Storyblok.vue";
import * as VueRouter from "vue-router";

const routes = [
    { path: '/', name: "Home", component: Home },
    { path: '/about', name: "About Us", component: AboutUs },
    { path: '/blogs', name: "Blog Home", component: NewBlogs},
    { path: '/blogs/:id', name: 'Blog Page', component: Storyblok },
]

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});