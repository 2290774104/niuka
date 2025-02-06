import NiukaDraggable from './modules/NiukaDraggable.vue'
import _Vue from 'vue';

type SFCWithInstall<T> = T & { install(Vue: typeof _Vue): void };

(NiukaDraggable as SFCWithInstall<typeof NiukaDraggable>).install = (
  Vue: typeof _Vue
): void => {
  Vue.component('niuka-draggable', NiukaDraggable);
};

export default NiukaDraggable;
