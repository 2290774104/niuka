import NiukaImageCard from './modules/NiukaImageCard.vue';
import _Vue from 'vue';

type SFCWithInstall<T> = T & { install(Vue: typeof _Vue): void };

(NiukaImageCard as SFCWithInstall<typeof NiukaImageCard>).install = (
  Vue: typeof _Vue
): void => {
  Vue.component('niuka-image-card', NiukaImageCard);
};

export default NiukaImageCard;
