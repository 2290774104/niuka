import Test from './components/Test.vue';
import NiukaSteps from '../../packages/Steps/modules/NiukaSteps.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default ({ Vue }) => {
  Vue.use(ElementUI)
  Vue.component('test', Test);
  Vue.component('NiukaSteps', NiukaSteps);
};
