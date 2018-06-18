import Vue from 'vue';
import template from './template.html';
import AddStudent from './addstudent/';
import StudentsList from './studentslist/';

export default Vue.extend({
  template,
  components: {
    AddStudent,
    StudentsList,
  },
});
