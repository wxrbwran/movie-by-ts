import axios, { AxiosResponse } from 'axios';
import config from './config';
import { Toast } from 'vant';

// 取消重复请求
interface IPending {
  url: string;
  cancel: Function;
}

export interface IAjaxOption{
  url: string;
  method: string;
  params?: any;
  success: Function;
  fail?: Function;
  finally?: Function;
}
const pending: IPending[] = [];
const cancelToken = axios.CancelToken;
const removePending = (config: any) => {
  for (const p in pending) {
    const item: any = p;
    const list: any = pending[p];
    // 当前请求在数组中存在时执行函数体
    if (list.url === `${config.url}&request_type=${config.method}`) {
      // 执行取消操作
      list.cancel();
      // 从数组中移除记录
      pending.splice(item, 1);
    }
  }
};

const api = axios.create(config);

// 添加请求拦截器
api.interceptors.request.use(
  (config: any) => {
    removePending(config);
    config.cancelToken = new cancelToken((c) => {
      pending.push({
        url: `${config.url}&request_type=${config.method}`,
        cancel: c });
    });
    return config;
  },
  (error: Error) => {
    return Promise.reject(error);
  },
);

// 返回状态判断(添加响应拦截器)
api.interceptors.response.use(
  (res: AxiosResponse) => {
    removePending(res.config);
    return res;
  },
  (error: Error) => {
    return Promise.reject(error);
  },
);

const req = async (option:IAjaxOption, vm: any) => {
  try {
    let res = null;
    switch (option.method) {
      case 'post' :
        res = await api.post(option.url, option.params); break;
      case 'patch' :
        res = await api.patch(option.url, option.params); break;
      case 'delete' :
        res = await api.delete(option.url, option.params); break;
      case 'put' :
        res = await api.put(option.url, option.params); break;
      case 'get' :
      default:
        res = await api.get(option.url, { params: option.params }); break;
    }
    option.success.call(vm, res);
  } catch (e) {
    if (option.fail) {
      option.fail.call(vm, e);
    } else {
      Toast.fail(e);
    }
  } finally {
    if (option.finally) {
      option.finally.call(vm);
    }
  }
};

const methods = ['Get', 'Post', 'Patch', 'Delete', 'Put'];

const ajaxMethods: {
  [attr: string]: any;
} = {};

methods.forEach((method) => {
  ajaxMethods[`ajax${method}`] = (option: IAjaxOption, vm: any): void => {
    const op = Object.assign(option, { method: method.toLowerCase() });
    req(op, vm);
  };
});


const apiGet = ajaxMethods.ajaxGet;
const apiPost = ajaxMethods.ajaxPost;
const apiPatch = ajaxMethods.ajaxPatch;
const apiDelete = ajaxMethods.ajaxDelete;
const apiPut = ajaxMethods.ajaxPut;

export {
  api,
  req,
  apiGet,
  apiPost,
  apiPatch,
  apiDelete,
  apiPut,
};
