import NiukaTagsInput from './modules/NiukaTagsInput.vue';
import _Vue from 'vue';

type SFCWithInstall<T> = T & { install(Vue: typeof _Vue): void };

(NiukaTagsInput as SFCWithInstall<typeof NiukaTagsInput>).install = (
  Vue: typeof _Vue
): void => {
  Vue.component('niuka-tags-input', NiukaTagsInput);
};

export default NiukaTagsInput;
