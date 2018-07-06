<template>
  <b-form @submit.prevent="submit">
      <mt-add-exam-details value="exam" v-model="exam">
        <b-button type="submit" variant="success" class="mb-3 w-100">Запази</b-button>
      </mt-add-exam-details>

    <div class="row">
      <!-- TODO create a separate component to show every question.
      this is here only for demoing purposes -->
      <div
        class="col"
        v-bind:key="index" v-for="(question, index) in exam.questions">
        {{question.text}} {{question.correctAnswer}} {{question.answers[0].text}}
      </div>
    </div>

    <mt-add-question :defaultQuestion="newQuestion" @add="add"></mt-add-question>
  </b-form>
</template>

<script>
  import MtAddEditQuestion from './AddEditQuestion';
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
      MtAddEditQuestion,
    },
    methods: {
      submit() {
        this.$store.dispatch(actions.ADD_EXAM, this.exam);
      },
      add(question) {
        this.exam.questions.push(question);
      },
    },
  };
</script>

<style scoped>

</style>
