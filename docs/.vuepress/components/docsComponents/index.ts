import _Vue from 'vue';
// 步骤条demo
import NiukaStepsBase from './NiukaSteps/base.vue';
import NiukaStepsIcon from './NiukaSteps/icon.vue';
import NiukaStepsSpace from './NiukaSteps/space.vue';
// 表格demo
import NiukaTableBase from './NiukaTable/base.vue';
import NiukaTablePage from './NiukaTable/page.vue';
import NiukaTableAttributes from './NiukaTable/attributes.vue';
import NiukaTableSlot from './NiukaTable/slot.vue';
const docsComponents: any = {
  NiukaStepsBase,
  NiukaStepsIcon,
  NiukaStepsSpace,
  NiukaTableBase,
  NiukaTablePage,
  NiukaTableAttributes,
  NiukaTableSlot,
};

export default {
  install(app: typeof _Vue) {
    Object.keys(docsComponents).forEach((key: string) => {
      app.component(key, docsComponents[key]);
    });
  },
};
