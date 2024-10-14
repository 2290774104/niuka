import NiukaSwitch from './modules/NiukaSwitch.vue';
import _Vue from 'vue';

type SFCWithInstall<T> = T & { install(Vue: typeof _Vue): void };

(NiukaSwitch as SFCWithInstall<typeof NiukaSwitch>).install = (
  Vue: typeof _Vue
): void => {
  Vue.component('niuka-switch', NiukaSwitch);
};

export default NiukaSwitch;
