<template>
  <div>
    <mt-container header="Списък с ученици">
      <ul class="list-group">
        <mt-search-filter v-model="searchName"></mt-search-filter>
        <p v-show="!filteredStudents.length" class="text-center p-3">Добави ученици в списъка</p>
        <mt-students-list-item v-if="filteredStudents.length"
                               v-for="(student) in filteredStudents"
                               :key="student._id"
                               :id="student._id"
                               :avatar="student.avatar"
                               :group="student.group"
                               :name="student.name"
                               @openModal="openModal"
        ></mt-students-list-item>
      </ul>
    </mt-container>
    <b-modal id="modalDeleteStudent"
             ref="modal"
             title="Изтрий студент"
             @ok="deleteStudent"
             ok-title="Да"
             cancel-title="Откажи"
    >
      <mt-confirm-delete-student :name="studentName"></mt-confirm-delete-student>
    </b-modal>
  </div>
</template>

<script>
  /*eslint no-underscore-dangle: 0*/
  import MtContainer from '../common/Container';
  import MtSearchFilter from '../common/SearchFilter';
  import MtStudentsListItem from './StudentsListItem';
  import MtConfirmDeleteStudent from '../students/ConfirmDeleteStudent';
  import actions from '../../store/action-types';

  export default {
    name: 'mt-students-list',
    components: {
      MtContainer,
      MtSearchFilter,
      MtStudentsListItem,
      MtConfirmDeleteStudent,
    },
    data() {
      return {
        showModal: false,
        searchName: '',
      };
    },
    computed: {
      filteredStudents() {
        const searchVal = this.searchName.toLowerCase();
        const students = this.$store.state.students;
        return students.filter(student => student.name.toLowerCase().indexOf(searchVal) !== -1);
      },
      studentName() {
        return this.$store.state.currentStudent.name;
      },
    },
    created() {
      this.getStudents();
    },
    methods: {
      getStudents() {
        this.$store.dispatch(actions.GET_STUDENTS);
      },
      openModal() {
        this.showModal = true;
      },
      deleteStudent() {
        this.$store.dispatch(actions.DELETE_STUDENT_BY_ID, this.$store.state.currentStudent._id);
      },
    },
  };

</script>

<style>

</style>
