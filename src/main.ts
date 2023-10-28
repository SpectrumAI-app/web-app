import { createApp } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faPlus, faSignOut, faSignOutAlt, faUserSecret} from '@fortawesome/free-solid-svg-icons'
import './style.css'
import App from './App.vue'
import AdminLogin from "./pages/AdminLogin/AdminLogin.vue";
import * as VueRouter from 'vue-router'
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard.vue";
import AdminTiles from "./pages/AdminDashboard/AdminTiles/AdminTiles.vue";
import BlogPanel from "./pages/BlogEditor/BlogPanel.vue";
import BlogEditor from "./pages/BlogEditor/BlogEditor.vue";
import BlogHome from "./pages/Blogs/BlogHome.vue";
import BlogPage from "./pages/Blogs/BlogPage.vue";


// TODO: MOVE TO EXTERNAL FILE
const routes = [
    { path: '/', name: "Login", component: AdminLogin },
    { path: '/blogs', name: "blog-home", component: BlogHome},
    { path: '/blogs/:slug', name: 'Blog Post', component: BlogPage, },
    { path: '/admin-dashboard', component: AdminDashboard,
        children: [
            {path: '', name: "Dashboard", component: AdminTiles},
            {path: '/blog', name: "Blog", component: BlogPanel, },
            {path: '/new', name: "New Blog", component: BlogEditor},
            {path: '/analytics', name: "Analytics", component: AdminDashboard},
        ]
    },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})


// Now the app has started!

library.add(faUserSecret, faPlus, faSignOut, faSignOutAlt)

createApp(App)
.use(router)
.component('Icon', FontAwesomeIcon)
.component('QuillEditor', QuillEditor)
.mount('#app')
