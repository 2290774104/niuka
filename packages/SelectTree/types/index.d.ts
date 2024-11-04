import type { TreeData } from 'element-ui/types/tree';

export declare type ValueType = string | number | string[] | number[];

export declare interface IProps {
  id?: string;
  label?: string;
  disabled?: string;
  isLeaf?: string;
  children?: string;
}

export declare interface Check {
  checkedKeys: string[];
  checkedNodes: TreeData[];
  halfCheckedKeys: string[];
  halfCheckedNodes: TreeData[];
}
