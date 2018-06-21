import axios from 'axios';

const baseURL = '/api/v1/';

export default {
  // todo add default error handler'
  get(url, success, failure) {
    this.request({
      method: 'get',
      url,
      success,
      failure,
    });
  },
  post(url, data, success, failure) {
    this.request({
      method: 'post',
      url,
      data,
      success,
      failure,
    });
  },
  delete(url, success, failure) {
    this.request({
      method: 'delete',
      url,
      success,
      failure,
    });
  },

  request: (options = {}) => {
    if (!options.url) {
      console.log('URL is required');
      return;
    }
    const data = Object.assign({
      method: 'get',
      baseURL,
    }, options);

    axios(data)
      .then((response) => {
        if (options.success) {
          options.success(response.data);
        }
      })
      .catch((error) => {
        if (options.failure) {
          options.failure(error);
        }
    });
  },
};
