<template>
  <div>
    <div class="text-right mb-3">
      <b-button type="button"
                size="sm"
                variant="danger"
                v-b-modal.modalDeleteExam
      >Изтрий изпит
      </b-button>
      <b-button
        @click="toggleAddQuestion"
        type="button"
        size="sm"
        text-variant="gray-lighter">
        <i aria-hidden="true" class="fa fa-plus-circle add-question"></i>
        Добави Въпрос
      </b-button>
      <b-button type="button" variant="success" @click="updateExam" size="sm">Запази</b-button>
    </div>
    <mt-add-question v-show="isToggled"
                     :defaultQuestion="newQuestion"
                     @add="add"
                     class="mb-3"></mt-add-question>


  </div>
</template>

<script>
  import MtInput from '../common/Input';
  import MtAddEditQuestion from './AddEditQuestion';
  import DefaultQuestion from './DefaultQuestion';
  import actions from '../../store/action-types';
  import mutations from '../../store/mutation-types';
  import MtEditRadioButtonGroup from '../common/EditRadioButtonGroup';

  /* eslint no-underscore-dangle: 0 */

  export default {
    name: 'mt-exam-table',
    methods: {
      add(question) {
        this.newQuestion = new DefaultQuestion();
        this.examClone.questions.push(question);
      },
      toggleAddQuestion() {
        this.isToggled = !this.isToggled;
      },
      updateExam() {
        this.$store.dispatch(actions.UPDATE_EXAM, {
          id: this.examClone._id,
          index: this.index,
          exam: this.examClone,
        });
      },
      setCurrentExam() {
        const exam = this.$store.getters.getExamById(this.examClone._id);
        this.$store.commit(mutations.SET_CURRENT_EXAM, exam);
      },
      selectAnswer(id, question) {
        console.log('TODO handle selection of answer to question', id, question);
      },
    },
    created() {
      this.examClone = Object.assign({}, this.exam);
      this.setCurrentExam();
    },
    props: {
      id: String,
      index: Number,
      exam: Object,
    },
    components: {
      MtInput,
      MtAddEditQuestion,
      MtEditRadioButtonGroup,
    },
    data() {
      return {
        examClone: {},
        isToggled: false,
        fields: [
          {key: 'category', label: 'Категория', tdClass: 'category-column', thClass: 'category-column'},
          {key: 'text', label: 'Въпрос'},
          {key: 'answers', label: 'Отговори'},
        ],
        newQuestion: new DefaultQuestion(),
      };
    },
  };
</script>

<style scoped>
  .answer-input {
    width: calc(100% - 30px);
  }

  .image-url {
    max-width: 100px;
    max-height: 100px;
  }

  .category-column {
    width: 150px;
  }

</style>
