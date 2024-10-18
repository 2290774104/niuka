import NiukaSelect from './modules/NiukaSelect.vue'
import _Vue from 'vue';

type SFCWithInstall<T> = T & { install(Vue: typeof _Vue): void };

(NiukaSelect as SFCWithInstall<typeof NiukaSelect>).install = (
  Vue: typeof _Vue
): void => {
  Vue.component('niuka-select', NiukaSelect);
};

export default NiukaSelect;
