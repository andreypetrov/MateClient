<template>
  <div>
    <mt-collapsible :key="exam._id" v-for="(exam, index) in exams">
      <mt-exam-header slot="header" :subjectName="exam.subjectName" :variant="exam.variant">
      </mt-exam-header>
      <mt-exam-body :exam="exam" :index="index"></mt-exam-body>
    </mt-collapsible>
    <b-modal id="modalDeleteExam"
             ref="modal"
             title="Изтрий изпит"
             @ok="deleteExam"
             ok-title="Да"
             cancel-title="Откажи"
    >
      <mt-confirm-delete :question="modalTitle"
                         :data="examDescription"></mt-confirm-delete>
    </b-modal>
  </div>
</template>

<script>

  import actions from '../../store/action-types';
  import MtCollapsible from '../common/Collapsible';
  import MtExamHeader from './ExamHeader';
  import MtExamBody from './ExamBody';
  import MtConfirmDelete from '../common/ConfirmDelete';

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
      examDescription() {
        const description =
          `${this.$store.state.currentExam.subjectName} <br> Вариант: ${this.$store.state.currentExam.variant}`;
        return description;
      },
    },
    data() {
      return {
        modalTitle: 'Сигурен ли си, че искаш да изтриеш',
      };
    },
    methods: {
      getExams() {
        this.$store.dispatch(actions.GET_EXAMS);
      },
      deleteExam() {
        this.$store.dispatch(actions.DELETE_EXAM, this.$store.state.currentExam._id);
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
