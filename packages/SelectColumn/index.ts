import NiukaSelectColumn from './modules/NiukaSelectColumn.vue';
import _Vue from 'vue';

type SFCWithInstall<T> = T & { install(Vue: typeof _Vue): void };

(NiukaSelectColumn as SFCWithInstall<typeof NiukaSelectColumn>).install = (
  Vue: typeof _Vue
): void => {
  Vue.component('niuka-select-column', NiukaSelectColumn);
};

export default NiukaSelectColumn;
