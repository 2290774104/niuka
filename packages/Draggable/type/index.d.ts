import type { SortableEvent } from 'sortablejs';

export declare interface DraggableEvent<T = any> extends SortableEvent {
  item: HTMLElement & { [Symbol('cloneElement')]: any };
  data: T;
  clonedData: T;
}
