import Vue from 'vue';
import VueRouter from 'vue-router';
import type { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/niukaSteps',
    name: 'StepsPlusView',
    component: () => import('@/views/TestViews/NiukaSteps.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.VITE_APP_BASE_URL,
  routes,
});

export default router;
