/*eslint no-underscore-dangle: 0*/
export default {
  getStudentById: state => id =>
    state.students.find(student => student._id === id),
};
