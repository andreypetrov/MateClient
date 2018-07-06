<template>
  <b-card-body>
    <mt-labeled-input label="Предмет"
                      size="sm"
                      v-model="examClone.subjectName"
                      class="category-input"
                      placeholder="Въведи предмет"
    ></mt-labeled-input>
    <mt-labeled-input label="Код на предмет"
                      size="sm"
                      v-model="examClone.subjectCode"
                      class="category-input"
                      placeholder="Въведи код на предмет"
    ></mt-labeled-input>
    <mt-labeled-input label="Вариант"
                      size="sm"
                      v-model="examClone.variant"
                      class="category-input"
                      placeholder="Въведи вариант"
    ></mt-labeled-input>

    <div class="text-right mb-3">
      <b-button type="button"
                size="sm"
                class="mr-2"
                variant="danger"
                v-b-modal.modalDeleteExam
      >Изтрий изпит
      </b-button>
      <b-button
        @click="toggleAddQuestion"
        type="button"
        size="sm"
        class="mr-2"
        text-variant="gray-lighter">
        <i aria-hidden="true" class="fa fa-plus-circle add-question"></i>
        Добави Въпрос
      </b-button>
      <b-button type="button" variant="success" @click="updateExam" size="sm">Запази</b-button>
    </div>
    <mt-add-question v-show="isToggled"
                     :value="newQuestion"
                     @add="addQuestion"
                     class="mb-3"
                     :has-add-button="true"
    ></mt-add-question>

    <div class="question-list">
      <mt-add-question class="question-list-item"
                       :key="question._id"
                       v-for="(question, index) in examClone.questions"
                       :value="question"
                       :index="index"
                       @input="changeQuestion($event, index)">
      </mt-add-question>
    </div>
  </b-card-body>
</template>

<script>
  import MtInput from '../common/Input';
  import MtAddQuestion from './AddQuestion';
  import MtLabeledInput from '../common/LabeledInput';
  import DefaultQuestion from './DefaultQuestion';
  import actions from '../../store/action-types';
  import mutations from '../../store/mutation-types';
  import MtEditRadioButtonGroup from '../common/EditRadioButtonGroup';

  /* eslint no-underscore-dangle: 0 */

  export default {
    name: 'mt-exam-table',
    methods: {
      changeQuestion(question, index) {
        this.examClone.questions.splice(index, 1, question);
      },
      addQuestion(question) {
        this.newQuestion = new DefaultQuestion();
        this.examClone.questions.push(question);
      },
      toggleAddQuestion() {
        this.isToggled = !this.isToggled;
      },
      updateExam() {
        console.log(this.examClone.category);
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
        console.log('TODO handle selection of answer to localQuestion', id, question);
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
      MtAddQuestion,
      MtEditRadioButtonGroup,
      MtLabeledInput,
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
