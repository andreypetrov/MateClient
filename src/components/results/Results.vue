<template>
  <div class="container-fluid pt-3">
    <div class="row">
      <div class="col">
        <mt-container header="Списък с резултати">
          <mt-collapsible :key="result._id" v-for="result in results">
            <mt-result-header slot="header" :name="result.student.name" :score="result.score"></mt-result-header>
            <mt-result-body :result="result"></mt-result-body>
          </mt-collapsible>
        </mt-container>
      </div>
    </div>
  </div>
</template>

<script>

  import MtContainer from '../common/Container';
  import MtSearchFilter from '../common/SearchFilter';
  import actions from '../../store/action-types';
  import MtCollapsible from '../common/Collapsible';
  import MtResultHeader from './ResultHeader';
  import MtResultBody from './ResultBody';

  export default {
    name: 'mt-results',
    components: {
      MtResultBody,
      MtResultHeader,
      MtCollapsible,
      MtContainer,
      MtSearchFilter,
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
