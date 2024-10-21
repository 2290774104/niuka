import _Vue from 'vue';
// 开关demo
import NiukaSwitchBase from './NiukaSwitch/base.vue';
import NiukaSwitchRemark from './NiukaSwitch/remark.vue';
import NiukaSwitchSort from './NiukaSwitch/sort.vue';
// 下拉选择demo
import NiukaSelectBase from './NiukaSelect/base.vue'
import NiukaSelectCustom from './NiukaSelect/custom.vue'
import NiukaSelectPage from './NiukaSelect/page.vue'
// 表格demo
import NiukaTableBase from './NiukaTable/base.vue';
import NiukaTablePage from './NiukaTable/page.vue';
import NiukaTableAttributes from './NiukaTable/attributes.vue';
import NiukaTableSlot from './NiukaTable/slot.vue';
// 步骤条demo
import NiukaStepsBase from './NiukaSteps/base.vue';
import NiukaStepsIcon from './NiukaSteps/icon.vue';
import NiukaStepsSpace from './NiukaSteps/space.vue';
// 锚点demo
import NiukaAnchorBase from './NiukaAnchor/base.vue';
import NiukaAnchorAuto from './NiukaAnchor/auto.vue';
import NiukaAnchorFixed from './NiukaAnchor/fixed.vue';

const docsComponents: any = {
  NiukaSwitchBase,
  NiukaSwitchRemark,
  NiukaSwitchSort,
  NiukaSelectBase,
  NiukaSelectCustom,
  NiukaSelectPage,
  NiukaTableBase,
  NiukaTablePage,
  NiukaTableAttributes,
  NiukaTableSlot,
  NiukaStepsBase,
  NiukaStepsIcon,
  NiukaStepsSpace,
  NiukaAnchorBase,
  NiukaAnchorAuto,
  NiukaAnchorFixed,
};

export default {
  install(app: typeof _Vue) {
    Object.keys(docsComponents).forEach((key: string) => {
      app.component(key, docsComponents[key]);
    });
  },
};
