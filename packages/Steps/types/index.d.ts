export declare interface IStep {
  title: string;
  icon?: string;
}

export declare interface IStepItem extends IStep {
  icon: string;
  isLast: boolean;
  status: 'process' | 'success' | 'wait';
}
