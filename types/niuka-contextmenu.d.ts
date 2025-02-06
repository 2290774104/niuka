import { NiukaComponents } from './component';

export declare interface IData {
  [key: string]: any;
}

export declare interface IMenu {
  icon?: string;
  title: string;
  event: string;
}

export declare class NiukaContextmenu extends NiukaComponents {
  menus: IMenu[];
  carrier?: string;
}
