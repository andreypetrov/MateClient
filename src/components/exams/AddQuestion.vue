<template>
  <b-form @submit.prevent="submit" class="px-3 py-2 bg-light question">
    <div class="row">
      <div class="col-md-2">
        <mt-labeled-input label="Категория"
                          size="sm"
                          v-model="localQuestion.category"
                          placeholder="Въведи категория"
                          @input="input"
        ></mt-labeled-input>

        <img v-if="localQuestion.imageUrl"
             class="image-url img-thumbnail"
             :src="localQuestion.imageUrl">
      </div>
      <div class="col-md-4">
        <mt-labeled-text-area label="Добави въпрос"
                          size="sm"
                          v-model="localQuestion.text"
                          @input="input"
                          placeholder="Въведи въпрос"
        >
        </mt-labeled-text-area>
        <mt-labeled-input label="Картинка към въпроса"
                          size="sm"
                          v-model="localQuestion.imageUrl"
                          @input="input"
                          placeholder="Въведи URL"
        ></mt-labeled-input>
      </div>
      <div class="col-md">
        <mt-edit-radio-button-group label="Отговори"
                                    v-model="localQuestion.answers"
                                    @select="selectAnswer"
                                    :initialSelection="localQuestion.correctAnswer"
                                    placeholder="Въведи отговор"
                                    @input="input">
        </mt-edit-radio-button-group>
      </div>
    </div>
    <div class="row" v-if="hasAddButton">
      <div class="col">
        <b-button type="submit" text-variant="gray-lighter">Добави</b-button>
      </div>
    </div>
  </b-form>
</template>

<script>
  import MtLabeledInput from '../common/LabeledInput';
  import MtLabeledTextArea from '../common/LabeledTextArea';
  import MtEditRadioButtonGroup from '../common/EditRadioButtonGroup';

  export default {
    name: 'mt-add-localQuestion',
    components: {MtEditRadioButtonGroup, MtLabeledInput, MtLabeledTextArea},
    data() {
      return {
        localQuestion: this.value,
      };
    },
    props: {
      hasAddButton: Boolean,
      value: Object,
    },
    methods: {
      input() {
        this.$emit('input', this.localQuestion);
      },
      submit() {
        this.$emit('add', this.localQuestion);
      },
      selectAnswer(correctAnswer) {
        this.localQuestion.correctAnswer = correctAnswer;
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
