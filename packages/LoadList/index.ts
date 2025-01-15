import NiukaLoadList from './modules/NiukaLoadList.vue'
import _Vue from 'vue';

type SFCWithInstall<T> = T & { install(Vue: typeof _Vue): void };

(NiukaLoadList as SFCWithInstall<typeof NiukaLoadList>).install = (
  Vue: typeof _Vue
): void => {
  Vue.component('niuka-load-list', NiukaLoadList);
};

export default NiukaLoadList;
