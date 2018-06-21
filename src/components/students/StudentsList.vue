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
    <mt-modal v-if="showModal"
              @onSubmit="removeStudent"
              title="Изтрий ученик"
              ok="Изтрий"
              cancel="Затвори"
    >
      <mt-confirm-delete-student :name="studentName"></mt-confirm-delete-student>
    </mt-modal>
  </div>
</template>

<script>
  import MtContainer from '../common/Container';
  import MtSearchFilter from '../common/SearchFilter';
  import MtStudentsListItem from './StudentsListItem';
  import MtModal from '../common/Modal';
  import MtConfirmDeleteStudent from '../students/ConfirmDeleteStudent';
  import actions from '../../store/action-types';

  export default {
    name: 'mt-students-list',
    components: {
      MtContainer,
      MtSearchFilter,
      MtStudentsListItem,
      MtModal,
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
      removeStudent() {

      },
    },
  };

</script>

<style scoped>

</style>
