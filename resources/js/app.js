// require('./bootstrap');
import { createApp } from 'vue'
import App from './components/App.vue';
// import router from './router';\
import VueCookie from 'vue-cookie';


const app=createApp(App);
// app.use(router);
app.use(VueCookie)
app.mount("#app");
