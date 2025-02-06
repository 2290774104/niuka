import _Vue from 'vue';
// 开关demo
import NiukaSwitchBase from './NiukaSwitch/base.vue';
import NiukaSwitchRemark from './NiukaSwitch/remark.vue';
import NiukaSwitchSort from './NiukaSwitch/sort.vue';
// 下拉选择demo
import NiukaSelectBase from './NiukaSelect/base.vue';
import NiukaSelectCustom from './NiukaSelect/custom.vue';
import NiukaSelectPage from './NiukaSelect/page.vue';
// 标签输入器
import NiukaTagsInputBase from './NiukaTagsInput/base.vue';
import NiukaTagsInputNumber from './NiukaTagsInput/number.vue';
import NiukaTagsInputValue from './NiukaTagsInput/value.vue';
import NiukaTagsInputDisabled from './NiukaTagsInput/disabled.vue';
import NiukaTagsInputRemove from './NiukaTagsInput/remove.vue';
// 下拉选择树demo
import NiukaSelectTreeBase from './NiukaSelectTree/base.vue';
import NiukaSelectTreeFilter from './NiukaSelectTree/filter.vue';
import NiukaSelectTreeMultiple from './NiukaSelectTree/multiple.vue';
import NiukaSelectTreeLeaf from './NiukaSelectTree/leaf.vue';
import NiukaSelectTreeSlot from './NiukaSelectTree/slot.vue';
// 下拉选择栏目demo
import NiukaSelectColumnBase from './NiukaSelectColumn/base.vue'
import NiukaSelectColumnFilter from './NiukaSelectColumn/filter.vue'
// 表格demo
import NiukaTableBase from './NiukaTable/base.vue';
import NiukaTablePage from './NiukaTable/page.vue';
import NiukaTableAttributes from './NiukaTable/attributes.vue';
import NiukaTableSlot from './NiukaTable/slot.vue';
// 图片列表demo
import NiukaImageListBase from './NiukaImageList/base.vue'
import NiukaImageListSlot from './NiukaImageList/slot.vue'
// 懒加载列表demo
import NiukaLoadListBase from './NiukaLoadList/base.vue'
// 步骤条demo
import NiukaStepsBase from './NiukaSteps/base.vue';
import NiukaStepsIcon from './NiukaSteps/icon.vue';
import NiukaStepsSpace from './NiukaSteps/space.vue';
// 锚点demo
import NiukaAnchorBase from './NiukaAnchor/base.vue';
import NiukaAnchorAuto from './NiukaAnchor/auto.vue';
import NiukaAnchorFixed from './NiukaAnchor/fixed.vue';
// 右键菜单demo
import NiukaContextmenuBase from './NiukaContextmenu/base.vue';

const docsComponents: any = {
  // 表单组件
  NiukaSwitchBase,
  NiukaSwitchRemark,
  NiukaSwitchSort,
  NiukaSelectBase,
  NiukaSelectCustom,
  NiukaSelectPage,
  NiukaTagsInputBase,
  NiukaTagsInputNumber,
  NiukaTagsInputValue,
  NiukaTagsInputDisabled,
  NiukaTagsInputRemove,
  NiukaSelectTreeBase,
  NiukaSelectTreeFilter,
  NiukaSelectTreeMultiple,
  NiukaSelectTreeLeaf,
  NiukaSelectTreeSlot,
  NiukaSelectColumnBase,
  NiukaSelectColumnFilter,
  // 数据展示
  NiukaTableBase,
  NiukaTablePage,
  NiukaTableAttributes,
  NiukaTableSlot,
  NiukaImageListBase,
  NiukaImageListSlot,
  NiukaLoadListBase,
  // 导航
  NiukaStepsBase,
  NiukaStepsIcon,
  NiukaStepsSpace,
  NiukaAnchorBase,
  NiukaAnchorAuto,
  NiukaAnchorFixed,
  NiukaContextmenuBase,
};

export default {
  install(app: typeof _Vue) {
    Object.keys(docsComponents).forEach((key: string) => {
      app.component(key, docsComponents[key]);
    });
  },
};
