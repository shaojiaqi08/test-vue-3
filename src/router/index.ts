import {routes} from './route'
import {createRouter, createWebHashHistory} from 'vue-router'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
