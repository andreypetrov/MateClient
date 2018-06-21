<template>
  <div>
    QUESTIONNAIRE
    <div>{{student.name}}</div>
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
    },
    mounted() {
      this.$store.dispatch(actions.GET_STUDENT_BY_ID, '5acdcd76734d1d55c319e43a');
    },
  };
</script>

<style>

</style>
