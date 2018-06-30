<template>
  <b-form @submit.prevent="submit">
      <mt-add-exam-details v-model="exam">
        <b-button type="submit" variant="success" class="mb-3">Запази</b-button>
      </mt-add-exam-details>

    <div class="row">
      <!-- TODO create a separate component to show every question.
      this is here only for demoing purposes -->
      <div
        class="col"
        v-bind:key="index" v-for="(question, index) in exam.questions">
        {{question.text}} {{question.correctAnswer}}
      </div>
    </div>

    <mt-add-question :defaultQuestion="newQuestion" @add="add"></mt-add-question>
  </b-form>
</template>

<script>
  import MtAddQuestion from './AddQuestion';
  import MtAddExamDetails from './AddExamDetails';
  import DefaultQuestion from './DefaultQuestion';

  export default {
    name: 'mt-add-exam',
    data() {
      return {
        exam: {
          subjectName: 'Правила за движение по пътищата',
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
        // alert(JSON.stringify(this.exam));
      },
      add(question) {
        //TODO figure out why resetting of the newQuestion does not work here
        this.newQuestion = new DefaultQuestion();
        this.exam.questions.push(Object.assign({}, question));
      },
    },
  };
</script>

<style scoped>

</style>
