import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import OverviewList from './components/common/OverviewList.vue';
import PreviewComponents from './components/common/PreviewComponents.vue';
import AttributeTable from './components/common/AttributeTable.vue';

import docsComponents from './components/docsComponents';

import http from '../../http'

export default ({ Vue }) => {
  Vue.use(ElementUI);
  Vue.mixin({
    mounted() {
      // 动态引入组件
      // 文档使用node打包，无法识别 window document 等浏览器对象
      // 参考官方给出的方法，使用 vue 动态组件注册
      import('../../packages').then((m) => {
        Vue.use(m.default)
        // 注册完成后重新渲染，但组件是在页面加载完成后注册
        // 首次加载页面时组件会无法渲染，需要重新加载
        this.$forceUpdate()
      })
    }
  })
  Vue.component('OverviewList', OverviewList);
  Vue.component('preview-components', PreviewComponents);
  Vue.component('attribute-table', AttributeTable);
  Vue.use(docsComponents);
  Vue.prototype.http = http
};
