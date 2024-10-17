import Request from './request';

interface HTTPRequestConfig {
  (url: string, data?: any, contentType?: string): any;
}

const AJ = 'application/json';
const AXC = 'application/x-www-form-urlencoded;charset=UTF-8';

export const request = new Request({
  timeout: 1000 * 60 * 1,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => {
      console.log('实例请求拦截器');
      return config;
    },
    // 响应拦截器
    responseInterceptors: (result) => {
      console.log('实例响应拦截器');
      return result;
    },
  },
});

export const $post: HTTPRequestConfig = (url, data, contentType) => {
  const ct = contentType || AJ;
  return request.request({
    method: 'post',
    url,
    data,
    headers: { 'Content-Type': ct },
  });
};

export const $get: HTTPRequestConfig = function (url, data, contentType) {
  const ct = contentType || AXC;
  data = data || {};
  return request.request({
    method: 'get',
    url,
    params: data,
    headers: {
      'Content-Type': ct,
    },
  });
};

export const $delete: HTTPRequestConfig = (url, data, contentType) => {
  const ct = contentType || AXC;
  data = data || {};
  return request.request({
    method: 'delete',
    url,
    params: data,
    headers: {
      'Content-Type': ct,
    },
  });
};

export const $put: HTTPRequestConfig = (url, data, contentType) => {
  const ct = contentType || AJ;
  data = data || {};
  return request.request({
    method: 'put',
    url,
    data,
    headers: { 'Content-Type': ct },
  });
};

export const $getBlob: HTTPRequestConfig = (url, data, contentType) => {
  const ct = contentType || AXC;
  data = data || {};
  return request.request({
    method: 'get',
    url,
    params: data,
    responseType: 'blob',
    headers: {
      'Content-Type': ct,
    },
  });
};

export const $postBlob: HTTPRequestConfig = (url, data, contentType) => {
  const ct = contentType || AJ;
  return request.request({
    method: 'post',
    url,
    data,
    responseType: 'blob',
    headers: { 'Content-Type': ct },
  });
};

export const $postArraybuffer: HTTPRequestConfig = (url, data, contentType) => {
  const ct = contentType || AJ;
  return request.request({
    method: 'post',
    url,
    data,
    responseType: 'arraybuffer',
    headers: { 'Content-Type': ct },
  });
};
