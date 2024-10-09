import _Vue, { PluginFunction, VueConstructor } from 'vue';
import NiukaSteps from './NiukaSteps/modules/NiukaSteps';
import NiukaTable from './NiukaTable/modules/NiukaTable';

interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

const Components: { [key: string]: VueConstructor } = {
  NiukaSteps,
  NiukaTable,
};

const install: InstallFunction = (Vue: typeof _Vue) => {
  if (install.installed) return;

  Object.keys(Components).forEach((name: any) => {
    Vue.component(name, Components[name]);
  });

  install.installed = true;
};
export { NiukaSteps, NiukaTable };
// export default install;
