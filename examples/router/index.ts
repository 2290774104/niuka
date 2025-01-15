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
  // 表单组件
  {
    path: '/niukaSwitch',
    name: 'NiukaSwitch',
    component: () => import('@/views/demo/NiukaSwitch/index.vue'),
  },
  {
    path: '/niukaSelect',
    name: 'NiukaSelect',
    component: () => import('@/views/demo/NiukaSelect/index.vue'),
  },
  {
    path: '/niukaTagsInput',
    name: 'NiukaTagsInput',
    component: () => import('@/views/demo/NiukaTagsInput/index.vue'),
  },
  {
    path: '/niukaSelectTree',
    name: 'NiukaSelectTree',
    component: () => import('@/views/demo/NiukaSelectTree/index.vue'),
  },
  {
    path: '/niukaSelectColumn',
    name: 'NiukaSelectColumn',
    component: () => import('@/views/demo/NiukaSelectColumn/index.vue'),
  },
  // 数据展示
  {
    path: '/niukaTable',
    name: 'NiukaTable',
    component: () => import('@/views/demo/NiukaTable/index.vue'),
  },
  {
    path: '/niukaImageList',
    name: 'NiukaImageList',
    component: () => import('@/views/demo/NiukaImageList/index.vue'),
  },
  {
    path: '/niukaLoadList',
    name: 'NiukaLoadList',
    component: () => import('@/views/demo/NiukaLoadList/index.vue'),
  },
  {
    path: '/niukaImage',
    name: 'NiukaImage',
    component: () => import('@/views/demo/NiukaImage/index.vue'),
  },
  // 导航
  {
    path: '/niukaSteps',
    name: 'NiukaSteps',
    component: () => import('@/views/demo/NiukaSteps/index.vue'),
  },
  {
    path: '/niukaAnchor',
    name: 'NiukaAnchor',
    component: () => import('@/views/demo/NiukaAnchor/index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.VITE_APP_BASE_URL,
  routes,
});

export default router;
