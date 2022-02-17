import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store';

import './registerServiceWorker'


Vue.config.productionTip = !(process.env.NODE_ENV === 'production');
new Vue({
    router,
    render: h => h(App),
    store,
    mounted() {

    }
}).$mount('#app')
