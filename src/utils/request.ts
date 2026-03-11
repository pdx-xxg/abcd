import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse, AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

// 定义请求响应参数，不含data
export interface Result extends AxiosResponse {
  code: number;
  msg: string;
  type: "success" | "info" | "error" | "warning";
}

// 请求响应参数，包含data
interface ResultData<T = any> extends Result {
  data: T;
}
const config = {
  baseURL: '/api',
  withCredentials: true,
  timeout: 10 * 1000 as number, // 请求超时时间
}
class RequestHttp {

  service: AxiosInstance;

  public constructor(config: AxiosRequestConfig) {

    this.service = axios.create(config);

    // request拦截器
    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (!config.headers) return config;
        config.headers.Authorization = `Bearer ${sessionStorage.getItem("token")}`;
        config.headers["Content-Type"] = "application/json;charset=utf-8";
        NProgress.start();
        return config;
      },
      (error: AxiosError) => {
        console.error(error);
        Promise.reject(error);
      }
    )

    // response 拦截器
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const res = response.data as ResultData;
        if(res.msg) {
          ElMessage({
            message: res.msg,
            type: res.type,
            duration: 1500
          });
        }
        NProgress.done();
        return res;
      },
      (error: AxiosError) => {
        console.error('err' + error);
        NProgress.done();
        ElMessage.error({
          message: `网络超时，没有请求到数据`,
          duration: 1500
        });
        return Promise.reject(error);
      }
    )
  }

  // 常用方法封装
  get<T = any>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.get(url, params );
  }
  post<T = any>(url: string, params?: object, responseType?: object): Promise<ResultData<T>> {
    return this.service.post(url, params, responseType);
  }
  put<T = any>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.put(url, params);
  }
  delete<T = any>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.delete(url, { params });
  }

}

export default new RequestHttp(config);