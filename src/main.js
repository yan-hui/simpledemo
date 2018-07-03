// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { routes } from './router/routes'
import VueRouter from 'vue-router';
Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    mode: 'history'
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})