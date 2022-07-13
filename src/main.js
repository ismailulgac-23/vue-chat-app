import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SvgIcon from "vue3-icon";
const app = createApp(App).use(store).use(router);
app.component("svg-icon", SvgIcon);
app.mount('#app');
