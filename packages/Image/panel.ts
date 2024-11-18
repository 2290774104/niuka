import NiukaImagePanel from './modules/NiukaImagePanel.vue';
import _Vue from 'vue';

type SFCWithInstall<T> = T & { install(Vue: typeof _Vue): void };

(NiukaImagePanel as SFCWithInstall<typeof NiukaImagePanel>).install = (
  Vue: typeof _Vue
): void => {
  Vue.component('niuka-image-panel', NiukaImagePanel);
};

export default NiukaImagePanel;
