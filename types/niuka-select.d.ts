import type { ElSelect } from 'element-ui/types/select';

export declare type ValueType = string | number | string[] | number[];

export declare interface IOptionAttrs {
  value: string; // option value 对应字段
  label: string; // option label 对应字段
}

export declare type params<P> = IPage & P;

export declare interface INetWork<P> {
  method: Function;
  params?: params<P>;
}

export declare interface IOption {
  hidden?: boolean; // 是否隐藏选项
  disabled?: boolean; // 是否禁用选项
  [key: string]: any;
}

export declare interface IPage {
  name?: string;
  pageNo?: number;
  pageSize?: number;
  defaultName?: string;
}

export declare class NiukaSelect extends ElSelect {
  value: ValueType;
  optionAttrs?: IOptionAttrs;
  dataType?: 'default' | 'custom';
  netWork?: INetWork<any>;
  options?: IOption[];
  width?: number | string;
  lazy?: boolean;
  load?: boolean;
  pageSize?: number;
  filterField?: string;
  pageField?: string;
  sizeField?: string;
  resultField?: string;
}
