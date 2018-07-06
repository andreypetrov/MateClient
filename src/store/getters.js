/*eslint no-underscore-dangle: 0*/
export default {
  getStudentById: state => id =>
    state.students.find(student => student._id === id),
  getRemainingStudents: (state, id) =>
    state.students.filter(student => student._id !== id),
  getExamById: state => id =>
    state.exams.find(exam => exam._id === id),
  getRemainingExams: (state, id) =>
    state.exams.filter(exam => exam._id !== id),
};
