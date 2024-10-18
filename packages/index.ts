import _Vue, { PluginFunction } from 'vue';
import NiukaSwitch from './Switch';
import NiukaSelect from './Select';
import NiukaTable from './Table';
import NiukaSteps from './Steps';
import NiukaAnchor from './Anchor';
import { version } from '../package.json';

// 存储组件列表
const components = [
  // Form 表单组件
  NiukaSwitch,
  NiukaSelect,
  // Data 数据展示
  NiukaTable,
  // Navigation 导航
  NiukaSteps,
  NiukaAnchor,
];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

type SFCWithInstall<T> = T & { install(Vue: typeof _Vue): void };

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install: InstallFunction = (Vue: typeof _Vue) => {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.map((component) =>
    (component as SFCWithInstall<typeof component>).install(Vue)
  );
  install.installed = true;
};

declare const window: {
  Vue: typeof _Vue;
};

// 判断是否是直接引入umd文件(仿element-ui，umd方式引入时自动注册组件)
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  // Form 表单组件
  NiukaSwitch,
  NiukaSelect,
  // Data 数据展示
  NiukaTable,
  // Navigation 导航
  NiukaSteps,
  NiukaAnchor,
};

export default {
  version,
  ...components,
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
};
