import Test from './components/Test.vue';
import NiukaSteps from '../../packages/Steps/modules/NiukaSteps.vue'

export default ({ Vue }) => {
  Vue.component('test', Test);
  Vue.component('NiukaSteps', NiukaSteps);
};
