<template>
  <div role="tablist">
    <b-card no-body class="mb-1 rounded-0">
      <b-card-header header-tag="header" class="p-0 rounded-0" role="tab">
        <b-btn class="rounded-0 text-left"
               block href="#"
               v-b-toggle="'accordion-' + id"
               variant="light">

          <span class="
            variant
            text-info
            rounded bg-dark pl-2 pr-2 pt-1 pb-1 font-weight-light">
            <i data-v-024bf5af="" class="fa fa-user ml-1 mr-2"></i>
            {{student.name}}
          </span>
          <span class="
            variant
            text-light
            pull-right
            rounded bg-dark pl-2 pr-2 pt-1 pb-1 font-weight-light">
            <i data-v-024bf5af="" class="fa fa-bar-chart ml-1 mr-2"></i>
            {{getScore}}
          </span>

        </b-btn>
      </b-card-header>
      <b-collapse :id="'accordion-' + id" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <span>{{exam.subjectName}}</span>
          <span
            class="
            variant
            text-info
            rounded bg-dark ml-3 pl-2 pr-2 pt-1 pb-1 font-weight-light">Вариант: {{exam.variant}}
          </span>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>

  export default {
    name: 'mt-result-collapse',
    props: {
      id: String,
      dateStarted: String,
      dateFinished: String,
      exam: Object,
      student: Object,
      questions: Array,
      score: {
        default: '',
        type: String,
      },
    },
    computed: {
      getScore() {
        return this.score.replace(' out of ', ' от ');
      },
    },
  };
</script>

<style scoped>
  .variant {
    font-size:0.8rem;
  }
</style>
