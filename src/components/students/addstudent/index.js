import Vue from 'vue';
import template from './template.html';
import AddStudentInput from './addstudentinput';
import AddStudentButton from './addstudentbutton';

export default Vue.component('add-student', {
  template,

  components: {
    AddStudentInput,
    AddStudentButton,
  },
  methods: {
    addStudent() {
      console.log('add student');
    },
  },
});
