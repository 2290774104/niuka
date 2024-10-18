import type { ElTable } from 'element-ui/types/table';
import type { ElTableColumn } from 'element-ui/types/table-column';

export declare interface IData {
  [key: string]: any;
}

export declare interface IColumn {
  type?: 'selection' | 'index' | 'expand';
  index?: number | ((index: number) => any);
  columnKey?: string;
  label: string;
  prop: string;
  width?: string | number;
  minWidth?: string;
  hidden?: boolean;
  fixed?: true | 'left' | 'right';
  resizable?: boolean;
  formatter?: (
    row: any,
    column: IColumn,
    cellValue: string,
    index: number
  ) => string;
  showOverflowTooltip?: boolean;
  align?: 'center' | 'left' | 'right';
  headerAlign?: 'center' | 'left' | 'right';
  className?: string;
  labelClassName?: string;
  selectable?: (row: any, index: number) => boolean;
  reserveSelection?: boolean;
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

export declare class NiukaTable extends ElTable {
  data: IData[];
  columns: IColumn[] | ElTableColumn[];
  pagination: boolean | IPagination;
  total: number;
}
