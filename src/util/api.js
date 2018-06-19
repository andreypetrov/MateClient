import axios from 'axios';

const baseURL = 'http://localhost:8080/api/v1/';

const Api = {

  // todo add loader
  // todo add default error handler
  fetch: (options = {}) => {
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
        console.log(error);
    });
  },

};

export default Api;
