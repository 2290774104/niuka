import _Vue from 'vue';

import NiukaStepsBase from './NiukaSteps/base.vue';
import NiukaStepsIcon from './NiukaSteps/icon.vue';
import NiukaStepsSpace from './NiukaSteps/space.vue';

const docsComponents: any = {
  NiukaStepsBase,
  NiukaStepsIcon,
  NiukaStepsSpace
};

export default {
  install(app: typeof _Vue) {
    Object.keys(docsComponents).forEach((key: string) => {
      app.component(key, docsComponents[key]);
    });
  },
};
