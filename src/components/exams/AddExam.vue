<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <div class="row">
      <div class="col">
        <b-form-group label="Предмет"
                      label-for="subject-code-input"
        >
          <b-form-input id="subject-code-input"
                        type="text"
                        v-model="form.subjectName"
                        required
                        placeholder="Въведи предмет">
          </b-form-input>
        </b-form-group>
      </div>
      <div class="col-2">
        <b-form-group label="Вариант"
                      label-for="variant-input"
        >
          <b-form-input id="variant-input"
                        type="text"
                        v-model="form.variant"
                        required
                        placeholder="Въведи вариант">
          </b-form-input>
        </b-form-group>
      </div>
      <div class="col-2">
          <b-button type="submit" variant="primary">Запази</b-button>
      </div>
    </div>
    <mt-add-question></mt-add-question>

  </b-form>
</template>

<script>

  import MtAddQuestion from './AddQuestion';

  export default {
    name: 'mt-add-exam',
    data() {
      return {
        form: {
          subjectName: 'Правила за движение по пътищата',
          variant: 'A',
          food: null,
          checked: [],
          currentQuestion: {
            text: 'Кой е най-високият връх в България?',
            imageUrl: ' http://www.westcoastpeaks.com/pics11B/bulg090711_038summitinview.jpg',
            correctAnswer: 'б',
            answers: [{
              _id: 'а',
              text: 'Вихрен',
            }, {
              _id: 'б',
              text: 'Мусала',
            }],
          },
          questions: [{
            text: 'Кой е най-високият връх в България?',
            imageUrl: ' http://www.westcoastpeaks.com/pics11B/bulg090711_038summitinview.jpg',
            correctAnswer: 'б',
            answers: [{
              _id: 'а',
              text: 'Вихрен',
            }, {
              _id: 'б',
              text: 'Мусала',
            }],
          }],
        },
        foods: [
          {text: 'Select One', value: null},
          'Carrots', 'Beans', 'Tomatoes', 'Corn',
        ],
        show: true,
      };
    },
    components: {
      MtAddQuestion,
    },
    methods: {
      onSubmit(e) {
        e.preventDefault();
        alert(JSON.stringify(this.form));
      },
      onReset(e) {
        e.preventDefault();
        /* Reset our form values */
        this.form.email = '';
        this.form.name = '';
        this.form.food = null;
        this.form.checked = [];
        /* Trick to reset/clear native browser form validation state */
        this.show = false;
        this.$nextTick(() => {
          this.show = true;
        });
      },
    },
  };
</script>

<style scoped>

</style>
