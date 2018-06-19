import mutations from './mutation-types';

export default {
  [mutations.SET_LOADER](state, isLoading) {
    state.isLoading = isLoading;
  },
  [mutations.ADD_STUDENT](state, student) {
    state.students.push(student);
  },
};
