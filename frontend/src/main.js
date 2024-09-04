import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import DetailUserModal from './components/DetailUserModal.vue'

import { mainMixin } from './mixins/mainMixin'

const app = createApp(App);
app.use(router);
app.mixin(mainMixin)
app.component('DetailUserModal', DetailUserModal);

app.mount('#app');
