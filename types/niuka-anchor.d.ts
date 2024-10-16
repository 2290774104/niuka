import { NiukaComponents } from './component';

export declare interface IAnchor {
  label: string;
  link: string;
  index?: number;
}

export declare class NiukaAnchor extends NiukaComponents {
  anchorLinks?: IAnchor[];
  query?: string;
  fixed?: boolean;
  width?: string | number;
  top?: string;
  right?: string;
}
