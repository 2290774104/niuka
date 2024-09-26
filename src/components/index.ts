import _Vue, { PluginFunction, VueConstructor } from 'vue';

interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

const Components: { [key: string]: VueConstructor } = {};

const install: InstallFunction = (Vue: typeof _Vue) => {
  if (install.installed) return;

  Object.keys(Components).forEach((name: any) => {
    Vue.component(name, Components[name]);
  });

  install.installed = true;
};
export {};
export default install;
