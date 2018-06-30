<template>
  <b-form @submit.prevent="submit" class="px-3 py-2 bg-light add-question-form">
    <div class="row">
      <div class="col">
        <mt-labeled-input label="Добави въпрос"
                          :text="question.text"
                          placeholder="Въведи въпрос"
        >
        </mt-labeled-input>
        <mt-labeled-input label="Картинка към въпроса"
                          :text="question.imageUrl"
                          placeholder="Въведи URL"
        >
        </mt-labeled-input>
      </div>
      <mt-add-answers class="col" :form="question" @select="selectAnswer"></mt-add-answers>
    </div>
    <b-button type="submit" text-variant="gray-lighter">Добави</b-button>
  </b-form>
</template>

<script>
  import MtAddAnswers from './AddAnswers';
  import MtLabeledInput from '../common/LabeledInput';

  export default {
    name: 'mt-add-question',
    components: {MtLabeledInput, MtAddAnswers},
    data() {
      return {
        question: {
          text: 'Кой е най-високият връх в България?',
          imageUrl: ' http://www.westcoastpeaks.com/pics11B/bulg090711_038summitinview.jpg',
          correctAnswer: 'б',
          answers: [{
            _id: 'а',
            text: '',
          }, {
            _id: 'б',
            text: '',
          }, {
            _id: 'в',
            text: '',
          }, {
            _id: 'г',
            text: '',
          },
          ],
        },
      };
    },
    methods: {
      submit() {
        this.$emit('add', this.question);
      },
      selectAnswer(correctAnswer) {
        this.question.correctAnswer = correctAnswer;
      },
    },
  };
</script>

<style scoped>
  .add-question-form {
    font-size: 0.85rem;
    border: 5px solid #dee2e6;
    color: #888;
  }

</style>
