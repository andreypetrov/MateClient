<template>
  <div>
    <mt-collapsible :key="exam._id" v-for="(exam, index) in exams">
      <mt-exam-header slot="header" :subjectName="exam.subjectName" :variant="exam.variant">
      </mt-exam-header>
      <mt-exam-body :exam="exam" :index="index"></mt-exam-body>
    </mt-collapsible>
  </div>
</template>

<script>

  import actions from '../../store/action-types';
  import MtCollapsible from '../common/Collapsible';
  import MtExamHeader from './ExamHeader';
  import MtExamBody from './ExamBody';

  export default {
    name: 'mt-exams-list',
    components: {
      MtCollapsible,
      MtExamHeader,
      MtExamBody,
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
    border-bottom: 0;
    .nav-link {
      border-radius: 0;
      margin-right: 1px;
      background-color: #dedede;
      padding-left: 35px;
      border: 0;
      &:hover {
        background-color: #ededed;
      }
      &.active {
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
      margin-bottom: 0;
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
