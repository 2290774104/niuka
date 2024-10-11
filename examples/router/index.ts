import Vue from 'vue';
import VueRouter from 'vue-router';
import type { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/demo/index.vue'),
  },
  {
    path: '/niukaSteps',
    name: 'NiukaSteps',
    component: () => import('@/views/demo/NiukaSteps/index.vue'),
  },
  {
    path: '/niukaTable',
    name: 'NiukaTable',
    component: () => import('@/views/demo/NiukaTable/index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.VITE_APP_BASE_URL,
  routes,
});

export default router;
