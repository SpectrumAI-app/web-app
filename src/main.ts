import {createApp, h} from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import i18n, { watchLocaleCookie } from "./lang";
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {
    faComputerMouse, faGlobe,
    faPlus,
    faSignOut,
    faSignOutAlt,
    faUserSecret,
} from '@fortawesome/free-solid-svg-icons'
import './style.css'
import App from './App.vue'
import AdminLogin from "./pages/AdminLogin/AdminLogin.vue";
import * as VueRouter from 'vue-router'
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard.vue";
import AdminTiles from "./pages/AdminDashboard/AdminTiles/AdminTiles.vue";
import BlogPanel from "./pages/BlogEditor/BlogPanel.vue";
import BlogEditor from "./pages/BlogEditor/BlogEditor.vue";
import NewBlogs from "./pages/NewBlogs/NewBlogs.vue";
import NewBlogPage from "./pages/NewBlogs/NewBlogPage/NewBlogPage.vue";
import Home from "./pages/Home/Home.vue";
// @ts-ignore
import { MotionPlugin } from '@vueuse/motion'
import CKEditor from '@ckeditor/ckeditor5-vue';
import AboutUs from "./pages/AboutUs/AboutUs.vue";



// TODO: MOVE TO EXTERNAL FILE
const routes = [
    { path: '/', name: "Home", component: Home },
    { path: '/admin-login', name: "Login", component: AdminLogin },
    { path: '/blogs', name: "blog-home", component: NewBlogs},
    { path: '/blog', name: 'Blog Post', component: NewBlogPage },
    { path: '/about', name: "About Us", component: AboutUs },
    { path: '/admin-dashboard', component: AdminDashboard,
        children: [
            {path: '', name: "Dashboard", component: AdminTiles},
            {path: '/admin-blog', name: "Blog", component: BlogPanel, },
            {path: '/admin-editor', name: "New Blog", component: BlogEditor},
            {path: '/admin-analytics', name: "Analytics", component: AdminDashboard},
        ]
    },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})


// Now the app has started!

library.add(faUserSecret, faPlus, faSignOut, faSignOutAlt, faComputerMouse, faGlobe)

const app = createApp({
    render: () => h(App),
});


app.use(router)
app.use(MotionPlugin)
app.use(i18n)
app.use(CKEditor)
app.component('Icon', FontAwesomeIcon)
app.component('QuillEditor', QuillEditor)
watchLocaleCookie();

app.mount('#app')
