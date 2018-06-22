<template>
  <div>
    <mt-exam-collapse
      v-if="exams.length"
      v-for="(exam) in exams"
      :key="exam._id"
      :id="exam._id"
      :data="exam"
    ></mt-exam-collapse>
  </div>
</template>

<script>

  import MtExamCollapse from './ExamCollapse';
  import actions from '../../store/action-types';

  export default {
    name: 'mt-exams-list',
    components: {
      MtExamCollapse,
    },
    created() {
      this.getExams();
    },
    computed: {
      exams() {
        return this.$store.state.exams;
      },
    },
    methods: {
      getExams() {
        this.$store.dispatch(actions.GET_EXAMS);
      },
    },
  };

</script>

<style lang="scss">
  .nav-tabs {
    border-bottom:0;
    .nav-link {
      border-radius: 0;
      margin-right: 1px;
      background-color: #dedede;
      padding-left: 35px;
      border: 0;
      &:hover{
        background-color: #ededed;
      }
      &.active{
       background-color: #ededed;
      }
    }
    .add-exam-icon {
      color: #2b994f;
      font-size: 20px;
      position: absolute;
      left: 10px;
    }
    .exams-list-icon {
      position: absolute;
      left: 10px;
      top: 12px;
      font-size: 18px;
      color: #444444;
    }
    .nav-item {
      margin-bottom:0;
      font-size: 0.9rem;
      position: relative;
    }
  }
  .tab-content {
    background-color: #ededed;
    .tab-pane {
      padding: 15px;
    }
  }

</style>
