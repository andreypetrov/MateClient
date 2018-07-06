<template>
  <b-form @submit.prevent="submit">
      <mt-add-exam-details value="exam" v-model="exam">
        <b-button type="submit" variant="success" class="mb-3 w-100">Запази</b-button>
      </mt-add-exam-details>

    <mt-add-question :value="newQuestion"
                     @add="add"
                     :has-add-button="true"
                     class="mb-3"
    ></mt-add-question>
    <div class="question-list">
      <mt-add-question class="question-list-item"
                       :key="question._id"
                       v-for="(question, index) in exam.questions"
                       :value="question"
                       :index="index"
                       @input="changeQuestion($event, index)">
      </mt-add-question>
    </div>
  </b-form>
</template>

<script>
  import MtAddQuestion from './AddQuestion';
  import MtAddExamDetails from './AddExamDetails';
  import DefaultQuestion from './DefaultQuestion';
  import actions from '../../store/action-types';

  export default {
    name: 'mt-add-exam',
    data() {
      return {
        exam: {
          subjectName: 'Правила за движение по пътищата',
          subjectCode: '01',
          variant: 'A',
          questions: [],
        },
        newQuestion: new DefaultQuestion(),
      };
    },
    components: {
      MtAddExamDetails,
      MtAddQuestion,
    },
    methods: {
      submit() {
        this.$store.dispatch(actions.ADD_EXAM, this.exam);
      },
      add(question) {
        this.exam.questions.push(question.deepCopy());
      },
      changeQuestion(question, index) {
        this.exam.questions.splice(index, 1, question);
      },
    },
  };
</script>

<style scoped>

</style>
