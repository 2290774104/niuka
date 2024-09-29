import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import NiukaComponents from 'niuka-components';
import 'niuka-components/style.css'

import OverviewList from './components/OverviewList.vue'

export default ({ Vue }) => {
  Vue.use(Element);
  Vue.use(NiukaComponents);
  Vue.component('OverviewList', OverviewList)
};
