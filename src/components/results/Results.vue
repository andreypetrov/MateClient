<template>
    <div class="container-fluid pt-3">
      <div class="row">
        <div class="col">
          <mt-container header="Списък с резултати">
            <mt-result-collapse
              v-if="results.length"
              v-for="(result) in results"
              :key="result._id"
              :id="result._id"
              :exam="result.exam"
              :dateStarted="result.dateStarted"
              :dateFinished="result.dateFinished"
              :questions="result.questions"
              :student="result.student"
              :score="result.score"
            ></mt-result-collapse>
          </mt-container>
        </div>
      </div>
    </div>
</template>

<script>

  import MtContainer from '../common/Container';
  import MtSearchFilter from '../common/SearchFilter';
  import actions from '../../store/action-types';
  import MtResultCollapse from './ResultCollapse';

  export default {
    name: 'mt-results',
    components: {
      MtContainer,
      MtSearchFilter,
      MtResultCollapse,
    },

    created() {
      this.getResults();
    },
    computed: {
      results() {
        return this.$store.state.results;
      },
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
