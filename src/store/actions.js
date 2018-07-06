import mutations from './mutation-types';
import actions from './action-types';
import getters from './getters';
import dataService from '../api/data-service';

export default {
  [actions.ADD_STUDENT]({commit}, student) {
    commit(mutations.SET_LOADER, true);
    dataService.addStudent(
      student,
      (responseStudent) => {
        //TODO consider committing immediately before the network call
        // and then unrolling the commit on error, and only updating the _id on success

        commit(mutations.ADD_STUDENT, responseStudent);
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
  [actions.DELETE_STUDENT]({commit, state}, studentId) {
    commit(mutations.SET_LOADER, true);
    dataService.deleteStudent(
      studentId,
      () => {
        const remainingStudents = getters.getRemainingStudents(state, studentId);
        commit(mutations.SET_STUDENTS, remainingStudents);
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
  [actions.GET_STUDENT_BY_ID]({commit}, id) {
    commit(mutations.SET_LOADER, true);
    dataService.getStudentById(
      id,
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
  [actions.GET_RESULTS]({commit}) {
    commit(mutations.SET_LOADER, true);
    dataService.getResults(
      (responseResults) => {
        commit(mutations.SET_RESULTS, responseResults);
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
  [actions.GET_STUDENT_RESULTS]({commit}, params) {
    commit(mutations.SET_LOADER, true);
    dataService.getStudentResults(
      params,
      (responseStudentResults) => {
        commit(mutations.SET_STUDENT_RESULTS, responseStudentResults);
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
  [actions.GET_EXAMS]({commit}, params) {
    commit(mutations.SET_LOADER, true);
    dataService.getExams(
      params,
      (responseExam) => {
        commit(mutations.SET_EXAMS, responseExam);
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
  [actions.GET_DEFAULT_EXAM]({commit, state}) {
    commit(mutations.SET_LOADER, true);
    dataService.getExams(
      {subjectCode: state.subjectCode, variant: state.variant},
      (responseExam) => {
        commit(mutations.SET_CURRENT_EXAM, responseExam[0]);
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
  [actions.ADD_EXAM]({commit}, exam) {
    commit(mutations.SET_LOADER, true);
    dataService.addExam(
      exam,
      (responseExam) => {
        commit(mutations.ADD_EXAM, responseExam);
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
  [actions.UPDATE_EXAM]({commit}, examData) {
    console.log('EXAM DATA', examData);
    commit(mutations.SET_LOADER, true);
    dataService.updateExam(
      examData.exam._id,
      examData.exam,
      (responseExam) => {
        commit(mutations.UPDATE_EXAM, {
          index: examData.index,
          exam: responseExam,
        });
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
  [actions.DELETE_EXAM]({commit}, examId) {
    commit(mutations.SET_LOADER, true);
    dataService.deleteExam(
      examId,
      () => {
        commit(mutations.DELETE_EXAM, examId);
        commit(mutations.SET_LOADER, false);
      },
      (error) => {
        console.log(error);
        commit(mutations.SET_LOADER, false);
      },
    );
  },
};
