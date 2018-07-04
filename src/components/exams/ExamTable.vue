<template>
  <div>
    <div class="text-right mb-3">
      <b-button type="button" size="sm" variant="danger">Изтрий изпит</b-button>
      <b-button
                @click="toggleAddQuestion"
                type="button"
                size="sm"
                text-variant="gray-lighter">
        <i aria-hidden="true" class="fa fa-plus-circle add-question"></i>
        Добави Въпрос
      </b-button>
      <b-button type="button" variant="success" size="sm">Запази</b-button>
    </div>
    <mt-add-question v-show="isToggled"
                     :defaultQuestion="newQuestion"
                     @add="add"
                     class="mb-3"></mt-add-question>

    <b-table :fields="fields"
             :items="items"
             outlined
             fixed
             class="table-striped"
    >
      <template slot="category" slot-scope="data">
        <mt-input placeHolder="Категория"
                  :text="data.item.category"
                  class="px-1 py-0"></mt-input>
      </template>
      <template slot="text" slot-scope="data">
        <mt-input :text="data.item.text" class="px-1 py-0"></mt-input>
        <mt-input placeHolder="URL на картинка"
                  :text="data.item.imageUrl"
                  class="px-1 py-0"></mt-input>
        <img v-if="data.item.imageUrl"
             class="image-url"
             :src="data.item.imageUrl">
      </template>
      <template slot="answers" slot-scope="data">
        <div v-for="(answer) in data.item.answers"
             :key="answer._id">
          {{answer._id}})
          <mt-input :text="answer.text"
                    class="ml-2 px-1 py-0 d-inline-block answer-input"
          ></mt-input>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
  import MtInput from '../common/Input';
  import MtAddQuestion from './AddQuestion';
  import DefaultQuestion from './DefaultQuestion';

  export default {
    name: 'mt-exam-table',
    methods: {
      add(question) {
        this.newQuestion = new DefaultQuestion();
        //this.exam.questions.push(question);
      },
      toggleAddQuestion() {
        this.isToggled = !this.isToggled;
      },
    },
    props: {
      id: String,
      items: Array,
    },
    components: {
      MtInput,
      MtAddQuestion,
    },
    data() {
      return {
        isToggled: false,
        fields: [
          {key: 'category', label: 'Категория', tdClass: 'category-column', thClass:'category-column'},
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
    width:calc(100% - 30px);
  }
  .image-url {
    max-width:100px;
    max-height:100px;
  }
  .category-column {
    width: 150px;
  }

</style>
