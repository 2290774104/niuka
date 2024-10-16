import axios from 'axios';
import type {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
} from 'axios';

import type {
  RequestInterceptors,
  RequestConfig,
  CancelRequestSource,
} from './types';

class Request {
  // axios实例
  instance: AxiosInstance;
  // 拦截器对象
  interceptorsObj?: RequestInterceptors;
  // 存放取消方法的集合
  cancelRequestSourceList?: CancelRequestSource[];
  // 存放所有请求URL的集合
  requestUrlList?: string[];

  constructor(config: RequestConfig) {
    // 记录axios实例
    this.instance = axios.create(config);
    this.interceptorsObj = config.interceptors;
    // 数据初始化
    this.cancelRequestSourceList = [];
    this.requestUrlList = [];

    // 类请求拦截
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        console.log('全局请求拦截器');
        return res;
      }
    );

    // 实例请求拦截
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    );

    // 实例响应拦截
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch
    );

    // 类响应拦截
    this.instance.interceptors.response.use((res: AxiosResponse) => {
      console.log('全局响应拦截器');
      return res.data;
    });
  }

  /**
   * @description: 获取指定 url 在 cancelRequestSourceList 中的索引
   * @param {string} url
   * @returns {number} 索引位置
   */
  private getSourceIndex(url: string) {
    return this.cancelRequestSourceList?.findIndex(
      (item: CancelRequestSource) => {
        return Object.keys(item)[0] === url;
      }
    );
  }

  /**
   * @description: 删除 requestUrlList 和 cancelRequestSourceList
   * @param {string} url
   * @returns {*}
   */
  private delUrl(url: string) {
    const urlIndex = this.requestUrlList?.findIndex((u) => u === url);
    const sourceIndex = this.getSourceIndex(url);
    // 删除 url 和 cancel 方法
    urlIndex !== -1 && this.requestUrlList?.splice(urlIndex as number, 1);
    sourceIndex !== -1 &&
      this.cancelRequestSourceList?.splice(sourceIndex as number, 1);
  }

  /**
   * @description: 取消所有请求
   * @returns {*}
   */
  public cancelAllRequest() {
    this.cancelRequestSourceList?.forEach((source) => {
      const key = Object.keys(source)[0];
      source[key]();
    });
  }

  /**
   * @description: 取消指定 url 的请求
   * @param {string | string[]} url
   * @returns {*}
   */
  public cancelRequest(url: string | string[]) {
    if (typeof url === 'string') {
      const sourceIndex = this.getSourceIndex(url) as number;
      sourceIndex !== -1 && this.cancelRequestSourceList?.[sourceIndex][url]();
    } else {
      url.forEach((u) => {
        const sourceIndex = this.getSourceIndex(u) as number;
        sourceIndex !== -1 && this.cancelRequestSourceList?.[sourceIndex][u]();
      });
    }
  }

  public request<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(
          config as AxiosRequestConfig
        );
      }
      const { url } = config;
      if (url) {
        this.requestUrlList?.push(url);
        config.cancelToken = new axios.CancelToken((c) => {
          this.cancelRequestSourceList?.push({
            [url]: c,
          });
        });
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors<T>(res);
          }

          resolve(res);
        })
        .catch((err: any) => {
          reject(err);
        })
        .finally(() => {
          url && this.delUrl(url);
        });
    });
  }
}

export default Request;
