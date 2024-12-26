import NiukaImageList from './modules/NiukaImageList.vue';
import _Vue from 'vue';

type SFCWithInstall<T> = T & { install(Vue: typeof _Vue): void };

(NiukaImageList as SFCWithInstall<typeof NiukaImageList>).install = (
  Vue: typeof _Vue
): void => {
  Vue.component('niuka-image-list', NiukaImageList);
};

export default NiukaImageList;
