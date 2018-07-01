import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const state = {
  students: [],
  currentStudent: {},
  isLoading: false,
  currentExam: {},
  exams: [],
  results: [],
  studentResults: [],
  subjectCode: '01',
  variant: 'Б',
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

export default store;
