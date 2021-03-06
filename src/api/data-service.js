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
  deleteStudent(id, success, failure) {
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
  addExam(data, success, failure) {
    networkClient.post('exams', data, success, failure);
  },
  updateExam(id, data, success, failure) {
    networkClient.put(`exams/${id}`, data, success, failure);
  },
  deleteExam(id, success, failure) {
    networkClient.delete(`exams/${id}`, success, failure);
  },
};
