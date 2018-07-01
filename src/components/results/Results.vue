<template>
  <div class="container-fluid pt-3">
    <div class="row">
      <div class="col">

      </div>
    </div>
  </div>
</template>

<script>

  import actions from '../../store/action-types';

  export default {
    name: 'mt-results',
    created() {
      this.getResults();
    },
    methods: {
      getResults() {
        const studentId = this.$route.query.studentId;
        if (studentId) {
          this.$store.dispatch(actions.GET_STUDENT_RESULTS, {studentId});
        } else {
          this.$store.dispatch(actions.GET_RESULTS);
        }
      },
    },
  };

</script>

<style lang="scss">

</style>
