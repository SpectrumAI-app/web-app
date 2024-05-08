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
    faSun,
    faMoon,
    faX
} from '@fortawesome/free-solid-svg-icons'
import './style.css'
import App from './App.vue'
// @ts-ignore
import { router } from "./routes/routes.ts";
import { MotionPlugin } from '@vueuse/motion'
import CKEditor from '@ckeditor/ckeditor5-vue';
import {apiPlugin, StoryblokVue} from "@storyblok/vue";

// Import storyblok components
import Grid from "./components/StoryblokComponents/Grid.vue";
import Page from "./components/StoryblokComponents/Page.vue";
//import Teaser from "./components/StoryblokComponents/Teaser.vue";
import Feature from "./components/StoryblokComponents/Feature.vue";
import Image from "./components/StoryblokComponents/Image.vue";
import Paragraph from "./components/StoryblokComponents/Paragraph.vue";
import Table from "./components/StoryblokComponents/Table.vue";
import BlogTile from "./components/Tiles/BlogTile/BlogTile.vue";
import BlogGrid from "./components/StoryblokComponents/BlogGrid.vue";

library.add(faUserSecret, faPlus, faSignOut, faSignOutAlt, faComputerMouse, faGlobe, faSun, faMoon, faX)

const app = createApp({
    render: () => h(App),
});


app.use(router)
app.use(MotionPlugin)
app.use(i18n)
app.use(CKEditor)
app.use(StoryblokVue, {
    accessToken: '9sa1hBnEqYjxMsjgswjLxwtt',
    use: [apiPlugin],
})
app.component('Icon', FontAwesomeIcon)
app.component('QuillEditor', QuillEditor)
app.component("Grid", Grid);
app.component('Page', Page);
app.component('Image', Image);
app.component('Paragraph', Paragraph);
app.component('Table', Table);
app.component('BlogTile', BlogTile);
app.component('BlogGrid', BlogGrid);
// app.component("Teaser", Teaser);
app.component("Feature", Feature);
watchLocaleCookie();

setTimeout(() => app.mount('#app'), 2000);
