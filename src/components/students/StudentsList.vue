<template>
  <div>
    <mt-container header="Списък с ученици">
      <ul class="list-group">
        <mt-search-filter></mt-search-filter>
        <p v-show="!students.length" class="text-center p-3">Добави ученици в списъка</p>
        <mt-students-list-item v-if="students.length"
                               v-for="(student) in students"
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
      };
    },
    computed: {
      students() {
        return this.$store.state.students;
      },
      studentName() {
        return this.$store.state.currentStudent.name;
      },
    },
    created() {
      this.fetchStudents();
    },

    methods: {
      fetchStudents() {
        this.$store.dispatch(actions.GET_STUDENTS);
      },
      openModal() {
        console.log('open modal');
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
