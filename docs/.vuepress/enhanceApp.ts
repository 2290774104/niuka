import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import NiukaComponents from 'niuka-components';
import 'niuka-components/style.css'

export default ({ Vue, options, router }) => {
  Vue.use(Element);
  Vue.use(NiukaComponents);
};
