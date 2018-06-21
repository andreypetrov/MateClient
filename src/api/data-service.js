import networkClient from './network-client';

export default {
  addStudent(data, success, failure) {
    networkClient.request({
      method: 'post',
      url: 'students',
      data,
      success,
      failure,
    });
  },
  getStudents(success, failure) {
    networkClient.request({
      method: 'get',
      url: 'students',
      success,
      failure,
    });
  },
};
