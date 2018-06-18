import Vue from 'vue';
import Router from 'vue-router';
import Game from '@/components/game';
import Navigation from '@/components/navigation';
import Students from '@/components/students';
import Exams from '@/components/exams';

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
        default: Students,
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
  ],
});
