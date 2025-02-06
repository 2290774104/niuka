<script lang="tsx">
import { Component, Emit, Model, Prop, Vue } from 'vue-property-decorator';
import Sortable, { type Options, type SortableEvent } from 'sortablejs';
import { cloneDeep } from 'lodash';

const CLONE_ELEMENT_KEY = Symbol('cloneElement');

interface DraggableEvent<T = any> extends SortableEvent {
  item: HTMLElement & { [CLONE_ELEMENT_KEY]: any };
  data: T;
  clonedData: T;
}

interface IData {
  [key: string]: any;
}

@Component({ name: 'NiukaDraggable' })
export default class NiukaDraggable extends Vue {
  // v-model 双向绑定
  @Model('model-change', { type: Array, required: true })
  private readonly value!: IData[];

  // 更新 v-model
  @Emit('model-change')
  private updateValue(value: IData[]): IData[] {
    return value;
  }

  // 自定义拖拽更新方法
  @Prop({ type: Function }) private readonly customUpdate!: (
    event: DraggableEvent
  ) => void;

  // 允许拖拽的项目类名
  @Prop({ type: String }) private readonly draggable!: string;

  // 鼠标移入拖拽项是否修改鼠标图标
  @Prop({ type: Boolean, default: true }) private readonly cursorMove!: boolean;

  // 定义排序动画的时间，单位：ms
  @Prop({ type: Number, default: 150 }) private readonly animation!: number;

  private CLONE_ELEMENT_KEY = Symbol('cloneElement');

  private currentNodes: Node[] | null = null;

  private data: any = null;

  private clonedData: any = null;

  mounted() {
    const options: Options = {
      animation: this.animation,
      onUpdate: (event: DraggableEvent) => {
        if (this.customUpdate) {
          this.customUpdate(event);
          return;
        }
        const { from, item, oldIndex, oldDraggableIndex, newDraggableIndex } =
          event;
        this.removeNode(item);
        this.insertNodeAt(from, item, oldIndex!);
        // 更新渲染列表
        this.updateValue(
          this.moveArrayElement(
            this.value,
            oldDraggableIndex!,
            newDraggableIndex!
          )
        );
      },
      onStart: (event: DraggableEvent) => {
        const { from, oldIndex, item } = event;
        this.currentNodes = Array.from(from.childNodes);
        const data = this.value[oldIndex];
        const clonedData = cloneDeep(data);
        this.setCurrentData(data, clonedData);
        item[CLONE_ELEMENT_KEY] = clonedData;
      },
      onAdd() {},
      onRemove() {},
      onEnd: (event: DraggableEvent) => {
        const { newIndex, oldIndex, from, to } = event;
        let error: Error | null = null;
        const isSameIndex = newIndex === oldIndex && from === to;
        try {
          if (isSameIndex) {
            let oldNode: Node | null = null;
            this.currentNodes?.some((node, index) => {
              if (oldNode && this.currentNodes?.length !== to.childNodes.length) {
                from.insertBefore(oldNode, node.nextSibling);
                return true;
              }
              const _node = to.childNodes[index];
              oldNode = to?.replaceChild(node, _node);
            });
          }
        } catch (e) {
          error = e;
        } finally {
          this.currentNodes = null;
        }
        this.$nextTick(() => {
          this.setCurrentData();
          if (error) throw error;
        });
      },
    };
    if (this.draggable) {
      options.draggable = this.draggable;
    }
    // 初始化拖拽插件
    new Sortable(this.getTarget(), options);
    if (this.cursorMove) this.setMoveStyle();
  }

  // 获取拖拽组件根元素
  private getTarget(target?: HTMLElement): HTMLElement {
    if (!target) {
      target = this.$el as HTMLElement;
    }
    return target;
  }

  // 设置拖拽元素鼠标样式
  private setMoveStyle() {
    const el = this.getTarget();
    if (this.draggable) {
      el.querySelectorAll(this.draggable).forEach((child: HTMLElement) => {
        child.style.cursor = 'move';
      });
    } else {
      el.childNodes.forEach((child: HTMLElement) => {
        child.style.cursor = 'move';
      });
    }
  }

  // 删除节点
  private removeNode(node: Node) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }

  // 移动数组元素
  private moveArrayElement(array: IData[], from: number, to: number) {
    if (to >= 0 && to <= array.length) {
      array.splice(to, 0, array.splice(from, 1)[0]);
    }
    return array;
  }

  // 在指定位置插入元素
  private insertNodeAt(
    parentElement: HTMLElement,
    element: HTMLElement,
    index: number
  ) {
    const refElement = parentElement.children[index];
    parentElement.insertBefore(element, refElement);
  }

  // 记录拖拽数据
  private setCurrentData(
    _data: typeof this.data = null,
    _clonedData: typeof this.data = null
  ) {
    this.data = _data;
    this.clonedData = _clonedData;
  }

  render() {
    return <div class="niuka-draggable">{this.$slots.default}</div>;
  }
}
</script>
