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
  getResults(success, failure) {
    networkClient.get('results', success, failure);
  },
  getStudentResults(params, success, failure) {
    networkClient.get('results', success, failure, params);
  },
  getExams(params, success, failure) {
    networkClient.get('exams', success, failure, params);
  },
};
