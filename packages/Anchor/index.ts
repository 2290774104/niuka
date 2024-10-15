import NiukaAnchor from "./modules/NiukaAnchor.vue";
import _Vue from 'vue';

type SFCWithInstall<T> = T & { install(Vue: typeof _Vue): void };

(NiukaAnchor as SFCWithInstall<typeof NiukaAnchor>).install = (
  Vue: typeof _Vue
): void => {
  Vue.component('niuka-anchor', NiukaAnchor);
};

export default NiukaAnchor;