<template>
  <b-form @submit.prevent="submit" class="px-3 py-2 question">
    <span class="remove-item"
          v-if="hasRemoveButton"
          @click="remove"
    >
      <i class="fa fa-times" aria-hidden="true"></i>
    </span>
    <div class="row">
      <div v-if="getQuestionNumber" class="question-counter">
        <span>{{getQuestionNumber}}</span>
      </div>
      <div class="col-md-2 category-container">
        <mt-labeled-input label="Категория"
                          size="sm"
                          v-model="value.category"
                          class="category-input"
                          placeholder="Въведи категория"
                          @input="input"
        ></mt-labeled-input>

        <img v-if="value.imageUrl"
             class="image-url img-thumbnail"
             :src="value.imageUrl">
      </div>
      <div class="col-md-4">
        <mt-labeled-text-area label="Добави въпрос"
                          size="sm"
                          v-model="value.text"
                          @input="input"
                          placeholder="Въведи въпрос"
        >
        </mt-labeled-text-area>
        <mt-labeled-input label="Картинка към въпроса"
                          size="sm"
                          v-model="value.imageUrl"
                          @input="input"
                          placeholder="Въведи URL"
        ></mt-labeled-input>
      </div>
      <div class="col-md">
        <mt-edit-radio-button-group label="Отговори"
                                    v-model="value.answers"
                                    @select="selectAnswer"
                                    :selected="value.correctAnswer"
                                    placeholder="Въведи отговор"
                                    @input="input">
        </mt-edit-radio-button-group>
      </div>
    </div>
    <div class="row" v-if="hasAddButton">
      <div class="col text-right">
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
    props: {
      hasAddButton: Boolean,
      hasRemoveButton: Boolean,
      value: Object,
      index: Number,
    },
    computed: {
      getQuestionNumber() {
        if (this.index === undefined) {
          return '';
        }
        return this.index + 1;
      },
    },
    methods: {
      input() {
        this.$emit('input', this.value);
      },
      submit() {
        this.$emit('add', this.value);
      },
      remove() {
        this.$emit('remove', this.index);
      },
      selectAnswer(correctAnswer) {
        this.value.correctAnswer = correctAnswer;
        this.input();
      },
    },
  };
</script>

<style scoped lang="scss">
  .question {
    position: relative;
    .remove-item {
      position: absolute;
      right: 0.75rem;
      width: 20px;
      height: 20px;
      text-align: center;
      padding: 0;
      z-index: 1000;
    }
  }
</style>
