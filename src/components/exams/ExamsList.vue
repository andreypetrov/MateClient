<template>
  <div>
    <mt-collapsible :key="exam._id" v-for="(exam, index) in exams">
      <mt-exam-header slot="header" :subjectName="exam.subjectName" :variant="exam.variant">
      </mt-exam-header>
      <mt-exam-body :exam="exam" :index="index" @update="updateExam(exam, index)"></mt-exam-body>
    </mt-collapsible>
    <!--<b-modal id="modalDeleteExam"-->
    <!--ref="modal"-->
    <!--title="Изтрий изпит"-->
    <!--@ok="deleteExam"-->
    <!--ok-title="Да"-->
    <!--cancel-title="Откажи"-->
    <!--&gt;-->
    <!--<mt-confirm-delete :question="modalTitle"-->
    <!--:data="examDescription"></mt-confirm-delete>-->
    <!--</b-modal>-->
  </div>
</template>

<script>

  import actions from '../../store/action-types';
  import MtCollapsible from '../common/Collapsible';
  import MtExamHeader from './ExamHeader';
  import MtExamBody from './ExamBody';
  import MtConfirmDelete from '../common/ConfirmDelete';
  /* eslint no-underscore-dangle: 0 */

  export default {
    name: 'mt-exams-list',
    components: {
      MtCollapsible,
      MtExamHeader,
      MtExamBody,
      MtConfirmDelete,
    },
    created() {
      this.getExams();
    },
    computed: {
      exams() {
        return this.$store.state.exams;
      },
      // examDescription() {
      //   const description =
      //     `${this.$store.state.currentExam.subjectName} <br> Вариант: ${this.$store.state.currentExam.variant}`;
      //   return description;
      // },
    },
    data() {
      return {
        // modalTitle: 'Сигурен ли си, че искаш да изтриеш',
      };
    },
    methods: {
      getExams() {
        this.$store.dispatch(actions.GET_EXAMS);
      },
      deleteExam(exam) {
        this.$store.dispatch(actions.DELETE_EXAM, exam._id);
      },
      updateExam(exam, index) {
        this.$store.dispatch(actions.UPDATE_EXAM, {exam, index});
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
      background-color: #333333;
      padding-left: 35px;
      border: 0;
      color: #ccc;

      &:hover {
        background-color: #545454;
      }
      &.active {
        background-color: #545454;
        color: #fff;
      }
    }
    .add-exam-icon {
      color: #3ed271;
      font-size: 20px;
      position: absolute;
      left: 10px;
    }
    .exams-list-icon {
      position: absolute;
      left: 10px;
      top: 12px;
      font-size: 18px;
    }
    .nav-item {
      margin-bottom: 0;
      font-size: 0.9rem;
      position: relative;
    }
  }

  .tab-content {
    background-color: #545454;
    color: #cccaca;
    .tab-pane {
      padding: 1.5rem;
      padding-top: 2rem;
    }
  }

</style>
