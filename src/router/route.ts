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
            },
            {
                path: '/test2',
                name: 'test2',
                component: () => import('@/views/test2/index.vue'),
                redirect: '/test2/test2-1',
                children: [
                    {
                        path: 'test2-1',
                        name: 'test2-1',
                        component: () => import('@/views/test2-1/index.vue')
                    }
                ]
            }
        ]
    },
    {
        path: '/home',
        redirect: '/'
    }
]
