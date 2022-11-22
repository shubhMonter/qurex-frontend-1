import Axios from 'axios';
import { BaseSetting } from '../utils/common';

export const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
};
// https://qurex.loca.lt
// https://qurex.onrender.com
export const dheaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

function returnAxiosInstance(customHeaders = headers) {
  return Axios.create({
    baseURL: BaseSetting.adminApiDomain,
    headers: customHeaders,
  });
}

export function get(url, customHeaders = headers, params = {}) {
  let cancelToken;
  if (typeof cancelToken != typeof undefined) {
    cancelToken.cancel(
      '######################TOKEN CANCELLED#################################'
    );
  }
  cancelToken = Axios.CancelToken.source();
  const axios = returnAxiosInstance(customHeaders);
  return axios.get(url);
}

export function post(url, requestData, customHeaders = headers) {
  const axios = returnAxiosInstance(customHeaders);
  return axios.post(url, requestData);
}

export function put(url, requestData, customHeaders = headers) {
  const axios = returnAxiosInstance(customHeaders);
  return axios.put(url, requestData);
}
