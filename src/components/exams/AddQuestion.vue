<template>
  <b-form @submit="onSubmit" @reset="onReset" class="px-3 py-2 bg-light add-question-form">
    <div class="row">
      <div class="col">
        <b-form-group id="question"
                      label="Добави въпрос"
                      label-for="question-input">
          <b-form-input id="question-input"
                        class="px-1 py-0"
                        type="text"
                        v-model="form.text"
                        placeholder="Въведи въпрос">
          </b-form-input>
        </b-form-group>
        <b-form-group id="imageUrl"
                      label="Картинка към въпроса"
                      label-for="image-url-input">
          <b-form-input id="image-url-input"
                        class="px-1 py-0"
                        type="text"
                        v-model="form.imageUrl"
                        placeholder="Въведи URL">
          </b-form-input>
        </b-form-group>
      </div>
      <div class="col">
        <b-form-group label="Отговори">
          <b-form-radio-group id="radio-group" v-model="form.selected" name="answerGroup" class="answer-form">
            <div class="row">
              <div class="col">
                <div class="answer-holder mb-2">
                  <span class="d-inline-block answer-variant">А)</span>
                  <b-form-radio value="а" class="mr-0 answer-radio">
                    <b-form-input id="answer-one"
                                  class="px-1 py-0"
                                  type="text"
                                  v-model="form.answers[0].text"
                                  placeholder="Въведи отговор">
                    </b-form-input>
                  </b-form-radio>
                </div>
                <div class="answer-holder mb-2">
                  <span class="d-inline-block answer-variant">Б)</span>
                  <b-form-radio value="б" class="mr-0 answer-radio">
                    <b-form-input id="answer-two"
                                  class="px-1 py-0"
                                  type="text"
                                  v-model="form.answers[1].text"
                                  placeholder="Въведи отговор">
                    </b-form-input>
                  </b-form-radio>
                </div>
              </div>
              <div class="col">
                <div class="answer-holder mb-2">
                  <span class="d-inline-block answer-variant">В)</span>
                  <b-form-radio value="в" class="mr-0 answer-radio">
                    <b-form-input id="answer-three"
                                  class="px-1 py-0"
                                  type="text"
                                  v-model="form.answers[2].text"
                                  placeholder="Въведи отговор">
                    </b-form-input>
                  </b-form-radio>
                </div>
                <div class="answer-holder mb-2">
                  <span class="d-inline-block answer-variant">Г)</span>
                  <b-form-radio value="г" class="mr-0 answer-radio">
                    <b-form-input id="answer-four"
                                  class="px-1 py-0"
                                  type="text"
                                  v-model="form.answers[3].text"
                                  placeholder="Въведи отговор">
                    </b-form-input>
                  </b-form-radio>
                </div>
              </div>
            </div>
          </b-form-radio-group>
        </b-form-group>
      </div>
    </div>
    <b-button type="submit" text-variant="gray-lighter">Добави</b-button>

  </b-form>
</template>

<script>

  export default {
    name: 'mt-add-question',
    data() {
      return {
        form: {
          selected: 'а',
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
          }
          ],
        },
      };
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
  .add-question-form {
    font-size: 0.85rem;
    border:5px solid #dee2e6;
    color:#888;
  }
  .answer-form {
    padding: 15px 10px;
    background: #ffffff;
    border: 5px solid #dee2e6;
  }
  .answer-holder {
    padding: 3px 3px 3px 5px;
    border-radius: 0.25rem;
    border: 1px solid transparent;
  }
  .answer-holder-selected {
    background: #d8ffe5;
    border: 1px solid #c8f3d6;
  }
  .answer-radio {
    width: calc(100% - 20px);
  }
  .answer-variant {
    min-width:15px;
  }
</style>
