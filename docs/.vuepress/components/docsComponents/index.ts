import _Vue from 'vue';
// 开关demo
import NiukaSwitchBase from './NiukaSwitch/base.vue';
import NiukaSwitchRemark from './NiukaSwitch/remark.vue';
import NiukaSwitchSort from './NiukaSwitch/sort.vue';
// 表格demo
import NiukaTableBase from './NiukaTable/base.vue';
import NiukaTablePage from './NiukaTable/page.vue';
import NiukaTableAttributes from './NiukaTable/attributes.vue';
import NiukaTableSlot from './NiukaTable/slot.vue';
// 步骤条demo
import NiukaStepsBase from './NiukaSteps/base.vue';
import NiukaStepsIcon from './NiukaSteps/icon.vue';
import NiukaStepsSpace from './NiukaSteps/space.vue';

const docsComponents: any = {
  NiukaSwitchBase,
  NiukaSwitchRemark,
  NiukaSwitchSort,
  NiukaTableBase,
  NiukaTablePage,
  NiukaTableAttributes,
  NiukaTableSlot,
  NiukaStepsBase,
  NiukaStepsIcon,
  NiukaStepsSpace,
};

export default {
  install(app: typeof _Vue) {
    Object.keys(docsComponents).forEach((key: string) => {
      app.component(key, docsComponents[key]);
    });
  },
};
