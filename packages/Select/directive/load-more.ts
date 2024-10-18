import Vue, { ObjectDirective, VNode } from 'vue';
import { DirectiveBinding } from 'vue/types/options';

const directive: ObjectDirective = {
  bind(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
    const SELECT_DOM = el.querySelector(
      '.el-select-dropdown .el-select-dropdown__wrap'
    ) as HTMLElement;
    SELECT_DOM?.addEventListener('scroll', function () {
      const condition = this.scrollHeight - this.scrollTop <= this.clientHeight;
      if (condition) {
        binding.value();
      }
    });
  },
};

Vue.directive('load-more', directive);
