import { NiukaComponents } from './component';

export declare interface INetWork {
  method: Function;
  params?: any;
}

export declare class NiukaSelectColumn extends NiukaComponents {
  value: string | number;
  netWork: INetWork;
  resultField?: string;
  recently?: boolean;
}
