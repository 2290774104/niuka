import NiukaContextmenu from './modules/NiukaContextmenu.vue'
import _Vue from 'vue';

type SFCWithInstall<T> = T & { install(Vue: typeof _Vue): void };

(NiukaContextmenu as SFCWithInstall<typeof NiukaContextmenu>).install = (
  Vue: typeof _Vue
): void => {
  Vue.component('niuka-contextmenu', NiukaContextmenu);
};

export default NiukaContextmenu;
