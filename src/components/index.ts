import StepsPlus from './StepsPlus/StepsPlus.vue';
import _Vue, { PluginFunction, VueConstructor } from 'vue';

interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

const Components: { [key: string]: VueConstructor } = {
  StepsPlus: StepsPlus,
};

const install: InstallFunction = (Vue: typeof _Vue) => {
  if (install.installed) return;

  Object.keys(Components).forEach((name: any) => {
    Vue.component(name, Components[name]);
  });

  install.installed = true;
};
export { StepsPlus };
export default install;
