<template>
  <mt-container header="Списък с ученици">
    <ul class="list-group">

      <mt-students-list-item v-if="students.length"
           v-for="(student) in students"
           :key="student._id"
           :id="student._id"
           :avatar="student.avatar"
           :group="student.group"
           :name="student.name"
      ></mt-students-list-item>

    </ul>
  </mt-container>
</template>

<script>
  import MtContainer from '../common/Container';
  import MtStudentsListItem from './StudentsListItem';
  import Api from '../../util/api';

  export default {
    name: 'mt-students-list',
    components: {
      MtContainer,
      MtStudentsListItem,
    },
    data() {
      return {
        students: [],
      };
    },
    created() {
      this.fetchStudents();
    },

    methods: {
      fetchStudents() {
        Api.fetch({
          url: 'students',
          success: (response) => {
            console.log(response);
            this.students = response;
          },
        });
      },
    },
  };

</script>

<style scoped>

</style>
