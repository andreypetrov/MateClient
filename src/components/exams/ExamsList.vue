<template>
  <div>
    <mt-collapsible :key="exam._id" v-for="(exam, index) in exams">
      <mt-exam-header slot="header" :subjectName="exam.subjectName" :variant="exam.variant">
      </mt-exam-header>
      <mt-exam-body :exam="exam" :index="index"
                    @update="updateExam(exam, index)"
                    @delete="deleteExam(exam, index)">
      </mt-exam-body>
    </mt-collapsible>
    <mt-modal v-model="modalVm" @ok="okDeleteExam"></mt-modal>
  </div>
</template>

<script>
  import Vue from 'vue';
  import actions from '../../store/action-types';
  import MtCollapsible from '../common/Collapsible';
  import MtExamHeader from './ExamHeader';
  import MtExamBody from './ExamBody';
  import MtModal from '../common/Modal';

  export default {
    name: 'mt-exams-list',
    components: {
      MtCollapsible,
      MtExamHeader,
      MtExamBody,
      MtModal,
    },
    created() {
      this.getExams();
    },
    computed: {
      exams() {
        return this.$store.state.exams;
      },
    },
    data() {
      return {
        modalVm: {
          isVisible: false,
          title: 'Изтрий изпит',
          subtitle: 'Сигурен ли си, че искаш да изтриеш',
          text: '',
          index: Number,
          examId: String,
        },
      };
    },
    methods: {
      getExams() {
        this.$store.dispatch(actions.GET_EXAMS);
      },
      deleteExam(exam, index) {
        //these two properties are only hidden data being passed, so no need of Vue.set(...)
        this.modalVm.examId = exam._id;
        this.modalVm.index = index;
        //use Vue.set for reactivity and update of ui.
        Vue.set(this.modalVm, 'text', this.examDescription(exam));
        Vue.set(this.modalVm, 'isVisible', true); //shows the modal
      },
      okDeleteExam(modalVm) {
        //exam id and index could have been stored locally too, instead of being passed to the modal and then returned
        this.$store.dispatch(actions.DELETE_EXAM, {examId: modalVm.examId, index: modalVm.index});
      },
      updateExam(exam, index) {
        this.$store.dispatch(actions.UPDATE_EXAM, {exam, index});
      },

      examDescription(exam) {
        return `${exam.subjectName} <br> Вариант: ${exam.variant}`;
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
