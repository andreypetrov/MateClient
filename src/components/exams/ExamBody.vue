<template>
  <b-card-body>
    <mt-exam-table :items="questions"></mt-exam-table>
  </b-card-body>
</template>

<script>
  import MtExamTable from '../exams/ExamTable';

  export default {
    name: 'mt-exam-body',
    props: {
      questions: Array,
    },
    components: {
      MtExamTable,
    },
  };
</script>

<style scoped>

</style>
