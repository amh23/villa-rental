import { createRouter, createWebHistory } from 'vue-router';
import VillaList from '@/components/VillaList.vue';
import VillaDetail from '@/components/VillaDetail.vue';

const routes = [
    {
        path: '/',
        name: 'villas',
        component: VillaList,
    },
    {
        path: '/villas/:id',
        name: 'detail',
        component: VillaDetail,
    },    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;