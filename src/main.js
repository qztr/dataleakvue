import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import './assets/style.css'
import './assets/modal.css'
import Datepicker from 'vue3-date-time-picker';

const app = createApp(App);
app.component('Datepicker', Datepicker);

app.mount('#app');