<template>
  <b-form @submit.prevent="submit" v-if="show">
    <div class="row">
      <mt-add-exam-details class="col" v-model="exam">
      </mt-add-exam-details>
      <div class="col">
        <b-button type="submit" variant="primary">Запази</b-button>
      </div>
    </div>
    <mt-add-question v-model="newQuestion" @add="add"></mt-add-question>
  </b-form>
  </b-form>
</template>

<script>

  import MtAddQuestion from './AddQuestion';
  import MtAddExamDetails from './AddExamDetails';

  export default {
    name: 'mt-add-exam',
    data() {
      return {
        exam: {
          subjectName: 'Правила за движение по пътищата',
          variant: 'A',
          questions: [],
        },
        show: true,
        newQuestion: {},
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
        alert(newQuestion);
        this.newQuestion = {};
      },
    },
  };
</script>

<style scoped>

</style>
