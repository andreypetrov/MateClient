import Vue from 'vue';
import Router from 'vue-router';
import Game from '../components/game';
import Navigation from '../components/navigation/Navigation';
import MTStudents from '../components/students/Students';
import Exams from '../components/exams';
import MTQuestionnaire from '../components/questionnaire/Questionnaire';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Game',
      components: {
        default: Game,
      },
    },
    {
      path: '/admin',
      name: 'Admin',
      components: {
        navigation: Navigation,
        default: MTStudents,
      },
    },
    {
      path: '/exams',
      name: 'Exams',
      components: {
        navigation: Navigation,
        default: Exams,
      },
    },
    {
      path: '/questionnaire',
      name: 'Questionnaire',
      components: {
        navigation: Navigation,
        default: MTQuestionnaire,
      },
    },
  ],
});
