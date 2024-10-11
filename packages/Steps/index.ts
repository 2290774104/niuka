import NiukaSteps from './modules/NiukaSteps.vue';
import _Vue from 'vue';

type SFCWithInstall<T> = T & { install(Vue: typeof _Vue): void };

(NiukaSteps as SFCWithInstall<typeof NiukaSteps>).install = (
  Vue: typeof _Vue
): void => {
  Vue.component('niuka-steps', NiukaSteps);
};

export default NiukaSteps;
