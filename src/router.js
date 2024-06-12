import { createRouter, createWebHashHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import SingleProjectView from './pages/SingleProjectView.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/projects',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects/:slug',
            name: 'project-view',
            component: SingleProjectView
        },
    ]
});

export {router};