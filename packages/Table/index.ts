import NiukaTable from './modules/NiukaTable.vue';
import _Vue from 'vue';

type SFCWithInstall<T> = T & { install(Vue: typeof _Vue): void };

(NiukaTable as SFCWithInstall<typeof NiukaTable>).install = (
  Vue: typeof _Vue
): void => {
  Vue.component('niuka-table', NiukaTable);
};

export default NiukaTable;
