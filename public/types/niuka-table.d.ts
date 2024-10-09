import { NiukaComponents } from './component';

export declare interface IData {
  [key: string]: any;
}

export declare interface IColumn {
  label: string;
  prop: string;
  width: string | number;
}

export declare interface IPagination {
  currentPage: number;
  pageSizes?: number[];
  pageSize?: number;
  layout?: string;
  background?: boolean;
}

export declare class NiukaTable extends NiukaComponents {
  data: IData[];
  columns: IColumn[];
  pagination: boolean | IPagination;
  total: number;
}
