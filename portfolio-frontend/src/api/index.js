import axios from 'axios';

export function request(method, url, options) {
  const { data = {}, before, success, error } = options;

  before();

  return axios({
    method,
    url,
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

export const get = (...params) => request('get', ...params);
export const post = (...params) => request('post', ...params);