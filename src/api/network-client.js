import axios from 'axios';

const baseURL = '/api/v1/';

export default {
  // todo add loader
  // todo add default error handler
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
