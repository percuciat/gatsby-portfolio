import axios from 'axios';

export function request(method, url, options) {
  const {
    data = {},
    before,
    success,
    error,
    headers = {},
    baseURL = '',
  } = options;

  before();

  return axios({
    method,
    baseURL,
    url,
    headers,
    data: method === 'get' ? {} : data,
  })
    .then((response) => {
      success(response.data);
      return response;
    })
    .catch((response) => {
      error(response);
      return response;
    });
}

export const get = (...args) => request('get', ...args);
export const post = (...args) => request('post', ...args);
export const put = (...args) => request('put', ...args);
export const patch = (...args) => request('patch', ...args);
export const del = (...args) => request('delete', ...args);