import NiukaSelectTree from './modules/NiukaSelectTree.vue';
import _Vue from 'vue';

type SFCWithInstall<T> = T & { install(Vue: typeof _Vue): void };

(NiukaSelectTree as SFCWithInstall<typeof NiukaSelectTree>).install = (
  Vue: typeof _Vue
): void => {
  Vue.component('niuka-select-tree', NiukaSelectTree);
};

export default NiukaSelectTree;
