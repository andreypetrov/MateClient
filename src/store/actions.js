import mutations from './mutation-types';
import actions from './action-types';
import dataService from '../api/data-service';

export default {
  [actions.ADD_STUDENT]({commit}, student) {
    commit(mutations.SET_LOADER, true);
    dataService.addStudent(
      student,
      (responseStudent) => {
        commit(mutations.ADD_STUDENT, responseStudent);
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
  [actions.GET_STUDENTS]({commit}) {
    commit(mutations.SET_LOADER, true);
    dataService.getStudents(
      (responseStudents) => {
        commit(mutations.SET_STUDENTS, responseStudents);
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
  [actions.GET_STUDENT_BY_ID]({commit}) {
    commit(mutations.SET_LOADER, true);
    dataService.getStudents(
      (responseStudent) => {
        //TODO perhaps consider a separate mutator,
        // because this one is used in the students admin section of the app
        commit(mutations.SET_CURRENT_STUDENT, responseStudent);
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
};
