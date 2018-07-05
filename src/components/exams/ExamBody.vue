<template>
  <b-card-body>
    <mt-exam-table :exam="exam"></mt-exam-table>
  </b-card-body>
</template>

<script>
  import MtExamTable from '../exams/ExamTable';

  export default {
    name: 'mt-exam-body',
    props: {
      exam: Object,
    },
    components: {
      MtExamTable,
    },
  };
</script>

<style scoped>

</style>
