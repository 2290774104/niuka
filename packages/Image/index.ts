import NiukaImage from './modules/NiukaImage.vue';
import _Vue from 'vue';

type SFCWithInstall<T> = T & { install(Vue: typeof _Vue): void };

(NiukaImage as SFCWithInstall<typeof NiukaImage>).install = (
  Vue: typeof _Vue
): void => {
  Vue.component('niuka-image', NiukaImage);
};

export default NiukaImage;
