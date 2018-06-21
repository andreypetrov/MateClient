import mutations from './mutation-types';

export default {
  [mutations.SET_LOADER](state, isLoading) {
    state.isLoading = isLoading;
  },
  [mutations.ADD_STUDENT](state, student) {
    state.students.push(student);
  },
  [mutations.SET_STUDENTS](state, students) {
    state.students = students;
  },
  [mutations.SET_CURRENT_STUDENT](state, student) {
    state.currentStudent = student;
  },
  [mutations.SET_EXAMS](state, exams) {
    state.exams = exams;
  },
  [mutations.SET_CURRENT_EXAM](state, exam) {
    state.currentExam = exam;
  },
};
