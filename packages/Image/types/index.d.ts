export declare interface IInfo {
  [key: string]: any;
}

export declare type Operation = 'preview' | 'edit' | 'delete';

export declare interface IRenderOperation {
  [key: Operation]: () => HTML;
}
