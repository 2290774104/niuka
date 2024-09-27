declare interface IStep {
  title: string;
  icon?: string;
}

declare interface IStepItem extends IStep {
  icon: string;
  isLast: boolean;
  status: 'process' | 'success' | 'wait';
}

export type { IStep, IStepItem };
