import { NiukaComponents } from './component';

export declare type ValueType = boolean | string | number;

export declare interface IInfo {
  activeValue?: boolean | string | number;
  inactiveValue?: boolean | string | number;
  [key: string]: any;
}

export declare class NiukaSwitch extends NiukaComponents {
  value: ValueType;
  info: IInfo;
  labelKey?: string;
  activeColor?: string;
  inactiveColor?: string;
  showRemark?: boolean;
  userEdit?: boolean;
  showSort?: boolean;
  sortKey?: string;
}
