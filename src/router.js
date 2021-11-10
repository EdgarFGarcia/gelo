import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/Login'
import Meow from './components/Meow'

Vue.use(VueRouter)

let routes = [
    { path: '/', name: 'index', component: Login },
    { path: '/2nd', name: 'newpage', component: Meow }
]

export default new VueRouter({
    mode: 'history',
    routes
})