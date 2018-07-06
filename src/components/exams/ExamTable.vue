<template>
  <div>
    <div class="text-right mb-3">
      <b-button type="button"
                size="sm"
                variant="danger"
                v-b-modal.modalDeleteExam
      >Изтрий изпит
      </b-button>
      <b-button
        @click="toggleAddQuestion"
        type="button"
        size="sm"
        text-variant="gray-lighter">
        <i aria-hidden="true" class="fa fa-plus-circle add-question"></i>
        Добави Въпрос
      </b-button>
      <b-button type="button" variant="success" @click="updateExam" size="sm">Запази</b-button>
    </div>
    <mt-add-question v-show="isToggled"
                     :question="newQuestion"
                     @add="add"
                     class="mb-3"

    ></mt-add-question>

    <mt-add-question :key="question._id" v-for="question in examClone.questions" :question="question">
    </mt-add-question>

    <b-table :fields="fields"
             :items="examClone.questions"
             outlined
             fixed
             class="table-striped"
    >
      <template slot="category" slot-scope="data">
        <mt-input placeHolder="Категория"
                  :text="data.item.category"
                  v-model="data.item.category"
                  class="px-1 py-0"></mt-input>
      </template>
      <template slot="text" slot-scope="data">
        <mt-input v-model="data.item.text"
                  :text="data.item.text"
                  class="px-1 py-0"></mt-input>
        <mt-input placeHolder="URL на картинка"
                  v-model="data.item.imageUrl"
                  :text="data.item.imageUrl"
                  class="px-1 py-0"></mt-input>
        <img v-if="data.item.imageUrl"
             class="image-url"
             :src="data.item.imageUrl">
      </template>
      <mt-edit-radio-button-group slot="answers" slot-scope="data"
                                  v-model="data.item.answers"
                                  @select="selectAnswer($event, data.item)"
                                  placeholder="Въведи отговор"
                                  :initialSelection="data.item.correctAnswer">
      </mt-edit-radio-button-group>
    </b-table>
  </div>
</template>

<script>
  import MtInput from '../common/Input';
  import MtAddQuestion from './AddQuestion';
  import DefaultQuestion from './DefaultQuestion';
  import actions from '../../store/action-types';
  import mutations from '../../store/mutation-types';
  import MtEditRadioButtonGroup from '../common/EditRadioButtonGroup';

  /* eslint no-underscore-dangle: 0 */

  export default {
    name: 'mt-exam-table',
    methods: {
      add(question) {
        this.newQuestion = new DefaultQuestion();
        this.examClone.questions.push(question);
      },
      toggleAddQuestion() {
        this.isToggled = !this.isToggled;
      },
      updateExam() {
        this.$store.dispatch(actions.UPDATE_EXAM, {
          id: this.examClone._id,
          index: this.index,
          exam: this.examClone,
        });
      },
      setCurrentExam() {
        const exam = this.$store.getters.getExamById(this.examClone._id);
        this.$store.commit(mutations.SET_CURRENT_EXAM, exam);
      },
      selectAnswer(id, question) {
        console.log('TODO handle selection of answer to localQuestion', id, question);
      },
    },
    created() {
      this.examClone = Object.assign({}, this.exam);
      this.setCurrentExam();
    },
    props: {
      id: String,
      index: Number,
      exam: Object,
    },
    components: {
      MtInput,
      MtAddQuestion,
      MtEditRadioButtonGroup,
    },
    data() {
      return {
        examClone: {},
        isToggled: false,
        fields: [
          {key: 'category', label: 'Категория', tdClass: 'category-column', thClass: 'category-column'},
          {key: 'text', label: 'Въпрос'},
          {key: 'answers', label: 'Отговори'},
        ],
        newQuestion: new DefaultQuestion(),
      };
    },
  };
</script>

<style scoped>
  .answer-input {
    width: calc(100% - 30px);
  }

  .image-url {
    max-width: 100px;
    max-height: 100px;
  }

  .category-column {
    width: 150px;
  }

</style>
