/*eslint no-underscore-dangle: 0*/
export default {
  getStudentById: state => id =>
    state.students.find(student => student._id === id),
  getRemainingStudents: (state, id) =>
    state.students.filter(student => student._id !== id),
  getExamById: state => id =>
    state.exams.find(exam => exam._id === id),
  getExamIndexById: state => (id) => {
    for (let i = 0; i < state.exams.length; i += 1) {
      if (state.exams[i]._id === id) return i;
    }
    return -1;
  },
};
