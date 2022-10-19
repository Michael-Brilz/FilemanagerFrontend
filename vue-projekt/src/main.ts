
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

// mouting point for the whole app
import App from './App.vue'
import router from './router'

// styles
import './assets/main.css';
import "./assets/styles/tailwind.css";

const app = createApp(App);

app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);

app.mount('#app');
