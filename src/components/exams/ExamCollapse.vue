<template>
  <div role="tablist">
    <b-card no-body class="mb-1 rounded-0">
      <b-card-header header-tag="header" class="p-0 rounded-0" role="tab">
        <b-btn class="rounded-0 text-left"
               block href="#"
               v-b-toggle="'accordion-' + id"
               variant="light">
          <span>{{data.subjectName}}</span>
          <span
            class="
            variant
            text-info
            rounded bg-dark ml-3 pl-2 pr-2 pt-1 pb-1 font-weight-light"
          >Вариант: {{data.variant}}
          </span>
        </b-btn>
      </b-card-header>
      <b-collapse :id="'accordion-' + id" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <mt-exam-table :items="data.questions"></mt-exam-table>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
  import MtExamTable from './ExamTable';

  export default {
    name: 'mt-exam-collapse',
    components: {
      MtExamTable,
    },
    props: {
      id: String,
      data: Object,
    },
  };
</script>

<style scoped>
  .variant {
    font-size:0.8rem;
  }
</style>
