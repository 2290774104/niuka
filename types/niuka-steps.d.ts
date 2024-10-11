import { NiukaComponents } from './component';

export declare interface IStep {
  title: string;
  icon?: string;
}

export declare interface IStepItem extends IStep {
  icon: string;
  isLast: boolean;
  status: 'process' | 'success' | 'wait';
}

export declare class NiukaSteps extends NiukaComponents {
  active: number;
  steps: IStep[];
  space: number;
}
