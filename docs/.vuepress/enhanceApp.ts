import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import NiukaComponents from '../../packages';

import OverviewList from './components/common/OverviewList.vue';
import PreviewComponents from './components/common/PreviewComponents.vue';
import AttributeTable from './components/common/AttributeTable.vue';

import docsComponents from './components/docsComponents';

export default ({ Vue }) => {
  Vue.use(ElementUI);
  Vue.use(NiukaComponents);
  Vue.component('OverviewList', OverviewList);
  Vue.component('preview-components', PreviewComponents);
  Vue.component('attribute-table', AttributeTable);
  Vue.use(docsComponents);
};
