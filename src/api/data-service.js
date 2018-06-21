import networkClient from './network-client';

export default {
  getStudents(success, failure) {
    networkClient.get('students', success, failure);
  },

  getStudentById(id, success, failure) {
    networkClient.get(`students/${id}`, success, failure);
  },

  addStudent(data, success, failure) {
    networkClient.post('students', data, success, failure);
  },

  deleteStudentById(id, success, failure) {
    networkClient.delete(`students/${id}`, success, failure);
  },

  getExams(params, success, failure) {
    networkClient.get('exams', success, failure, params);
  },
};
