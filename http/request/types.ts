import type {
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from 'axios';

export interface RequestInterceptors {
  // 请求拦截
  requestInterceptors?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  // 响应拦截
  responseInterceptors?: <T = AxiosResponse>(config: T) => T;
  responseInterceptorsCatch?: (err: any) => any;
}

export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors;
}

export interface CancelRequestSource {
  [index: string]: () => void;
}
