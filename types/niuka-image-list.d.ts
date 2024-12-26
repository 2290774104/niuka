import { NiukaComponents } from './component';

export declare interface IData {
  [key: string]: any;
}

export declare interface IPagination {
  currentPage: number;
  pageSizes?: number[];
  pageSize?: number;
  layout?: string;
  background?: boolean;
}

export declare class NiukaImageList extends NiukaComponents {
  data: IData[];
  pagination: boolean | IPagination;
  total: number;
  urlKey?: string;
  titleKey?: string;
}
