<template>
  <b-card-body>

    <div class="text-right mb-3">
      <b-button type="button"
                size="sm"
                class="mr-2"
                variant="danger"
                @click="deleteExam"
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
      <b-button type="button" variant="success" size="sm" @click="updateExam">Запази</b-button>
    </div>
    <div class="row">
      <div class="col-md-2">
        <mt-labeled-input label="Код на предмет"
                          size="sm"
                          v-model="exam.subjectCode"
                          class="category-input"
                          placeholder="Въведи код на предмет"
        ></mt-labeled-input>
      </div>
      <div class="col-md-8">
        <mt-labeled-input label="Предмет"
                          size="sm"
                          v-model="exam.subjectName"
                          class="category-input"
                          placeholder="Въведи предмет"
        ></mt-labeled-input>
      </div>
      <div class="col-md-2">
        <mt-labeled-input label="Вариант"
                          size="sm"
                          v-model="exam.variant"
                          class="category-input"
                          placeholder="Въведи вариант"
        ></mt-labeled-input>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <mt-labeled-input label="Карта"
                          size="sm"
                          v-model="exam.map"
                          class="category-input"
                          placeholder="Въведи карта"
        ></mt-labeled-input>
      </div>
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
                       v-for="(question, index) in exam.questions"
                       :value="question"
                       :hasRemoveButton="true"
                       @remove="removeQuestion($event, index)"
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
  import MtEditRadioButtonGroup from '../common/EditRadioButtonGroup';

  /* eslint no-underscore-dangle: 0 */

  export default {
    name: 'mt-exam-table',
    methods: {
      changeQuestion(question, index) {
        this.exam.questions.splice(index, 1, question);
      },
      addQuestion(question) {
        this.newQuestion = new DefaultQuestion();
        this.exam.questions.push(question);
      },
      removeQuestion(index) {
        this.exam.questions.splice(index, 1);
      },
      toggleAddQuestion() {
        this.isToggled = !this.isToggled;
      },
      updateExam() {
        this.$emit('update', this.exam);
      },
      deleteExam() {
        this.$emit('delete', this.exam);
      },
      selectAnswer(id, question) {
        console.log('TODO handle selection of answer to localQuestion', id, question);
      },
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
