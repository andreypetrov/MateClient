<template>
  <b-form @submit.prevent="submit">
    <div class="row">
      <mt-add-exam-details class="col" v-model="exam">
      </mt-add-exam-details>
      <div class="col">
        <b-button type="submit" variant="primary">Запази</b-button>
      </div>
    </div>
    <div v-bind:key="index" v-for="(question, index) in exam.questions">
        {{question.text}} {{question.correctAnswer}}
    </div>
    <mt-add-question v-model="newQuestion" @add="add"></mt-add-question>
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
        alert(JSON.stringify(this.exam));
      },
      add(newQuestion) {
        this.exam.questions.push(newQuestion);
        this.newQuestion = new DefaultQuestion();
      },
    },
  };
</script>

<style scoped>

</style>
