<template>
  <div>
    <div>QUESTIONNAIRE</div>

    CURRENT STUDENT:
    <div>{{student.name}}</div>
    ALL EXAMS:
    <div v-bind:key="exam._id" v-for="exam in exams">
      id: {{exam._id}} {{exam.subjectName}} {{exam.variant}}
    </div>
    CURRENT EXAM:
    <div>{{exam._id}} {{exam.subjectName}} {{exam.variant}}</div>

  </div>
</template>

<script>
  import actions from '../../store/action-types';

  export default {
    name: 'mt-questionnaire',
    computed: {
      student() {
        return this.$store.state.currentStudent;
      },
      exams() {
        return this.$store.state.exams;
      },
      exam() {
        return this.$store.state.currentExam;
      },
    },
    mounted() {
      this.$store.dispatch(actions.GET_STUDENT_BY_ID, '5acdcd76734d1d55c319e43a');
      this.$store.dispatch(actions.GET_EXAMS);
      this.$store.dispatch(actions.GET_DEFAULT_EXAM);
    },
  };
</script>

<style>

</style>
