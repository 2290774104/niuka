import { NiukaComponents } from './component';

export declare interface IData {
  [key: string]: any;
}

export declare interface IColumn {
  label: string;
  prop: string;
  width?: string | number;
  hidden?: boolean;
  align?: 'center' | 'left' | 'right';
  customRender?: string;
  scopedSlots?: {
    customRender?: string;
  };
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
