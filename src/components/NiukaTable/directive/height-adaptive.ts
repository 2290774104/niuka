import { debounce } from 'lodash';
import Vue, { DirectiveBinding, ObjectDirective, VNode } from 'vue';

interface DirectiveParameter {
  height: number | string | undefined;
  bottomOffset: number;
}

interface TableElement extends HTMLElement {
  doResize?: any;
}

const getHeight = (binding: DirectiveBinding<DirectiveParameter>): number => {
  const { height, bottomOffset } = binding.value;
  // 未设置高度则自适应高度
  if (height) {
    if (typeof height === 'string') {
      return parseInt(height) - bottomOffset;
    } else {
      return height - bottomOffset;
    }
  }
  return 0;
};

const doResize = (el: TableElement, binding: any, vnode: VNode) => {
  const height = getHeight(binding);
  const { bottomOffset } = binding.value;
  const { componentInstance } = vnode;
  const $table = componentInstance as any;
  if (height === 0) {
    $table.layout.setHeight(`calc(100% - ${bottomOffset}px)`);
  } else {
    $table.layout.setHeight(height);
  }
};

const directive: ObjectDirective<TableElement, VNode> = {
  bind(el: TableElement, binding: any, vnode: VNode) {
    doResize(el, binding, vnode);
    el.doResize = debounce(() => doResize(el, binding, vnode), 16);
    removeEventListener('resize', el.doResize);
    addEventListener('resize', el.doResize);
  },
  unbind(el: TableElement) {
    removeEventListener('resize', el.doResize);
  },
};

Vue.directive('height-adaptive', directive);
