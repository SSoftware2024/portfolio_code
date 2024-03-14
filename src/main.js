import { createApp } from 'vue'
import './css/app.css';
import 'animate.css';
import router from './router.js';
import App from './App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const app = createApp(App);
app.use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
