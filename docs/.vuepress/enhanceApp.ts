import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import NiukaComponents from '../../packages';

import PreviewComponents from './components/common/PreviewComponents.vue';

import docsComponents from './components/docsComponents';

export default ({ Vue }) => {
  Vue.use(ElementUI);
  Vue.use(NiukaComponents);
  Vue.component('preview-components', PreviewComponents);
  Vue.use(docsComponents);
};
