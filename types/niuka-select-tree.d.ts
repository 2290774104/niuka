import { NiukaComponents } from './component';
import type { TreeData } from 'element-ui/types/tree';

export declare type ValueType = string | number | string[] | number[];

export declare interface IProps {
  id?: string;
  label?: string;
  disabled?: string;
  isLeaf?: string;
  children?: string;
}

export declare class NiukaSelectTree extends NiukaComponents {
  value: ValueType;
  data: TreeData[];
  props?: IProps;
  multiple?: boolean;
  filterable?: boolean;
  selectLeaf?: boolean;
  clickToSelected?: boolean;
}
