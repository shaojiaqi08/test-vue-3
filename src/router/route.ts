import {RouteRecordRaw} from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/layout/index/index.vue'),
        redirect: '/test',
        children: [
            {
                path: '/test',
                name: 'test',
                component: () => import('@/views/home/index.vue')
            }
        ]
    },
    {
        path: '/home',
        redirect: '/'
    }
]
