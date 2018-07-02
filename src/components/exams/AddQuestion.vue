<template>
  <b-form @submit.prevent="submit" class="px-3 py-2 bg-light question">
    <div class="row">
      <div class="col-md">
        <mt-labeled-input label="Добави въпрос"
                          v-model="question.text"
                          placeholder="Въведи въпрос"
        >
        </mt-labeled-input>
      </div>
      <div class="col-md-4">
        <mt-labeled-input label="Категория на въпроса"
                          v-model="question.category"
                          placeholder="Въведи категория"
        ></mt-labeled-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md">
        <mt-labeled-input label="Картинка към въпроса"
                          v-model="question.imageUrl"
                          placeholder="Въведи URL"
        ></mt-labeled-input>
      </div>
       <div class="col-md-4">
         <img v-if="question.imageUrl"
              class="image-url img-thumbnail"
              :src="question.imageUrl">
       </div>
    </div>
    <div class="row">
      <div class="col">
        <mt-edit-radio-button-group label="Отговори"
                                    v-model="question.answers"
                                    @select="selectAnswer"
                                    placeholder="Въведи отговор">
        </mt-edit-radio-button-group>
      </div>
    </div>
    <b-button type="submit" text-variant="gray-lighter">Добави</b-button>
  </b-form>
</template>

<script>
  import MtLabeledInput from '../common/LabeledInput';
  import MtEditRadioButtonGroup from '../common/EditRadioButtonGroup';

  export default {
    name: 'mt-add-question',
    components: {MtEditRadioButtonGroup, MtLabeledInput},
    data() {
      return {
        question: this.defaultQuestion,
      };
    },
    props: {
      defaultQuestion: Object,
    },
    methods: {
      submit() {
        this.$emit('add', this.question.deepCopy());
      },
      selectAnswer(correctAnswer) {
        this.question.correctAnswer = correctAnswer;
      },
    },
  };
</script>

<style scoped>
  .question {
    font-size: 0.85rem;
    border: 5px solid #b8d4c1;
    color: #888;
  }
  .image-url {
    max-width:100px;
    max-height:100px;
  }
</style>
