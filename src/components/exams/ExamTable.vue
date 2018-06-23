<template>
  <b-table :fields="fields"
           :items="items"
           thClass="p-1"
           class="table-bordered">
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
</template>

<script>
  import MtInput from '../common/Input';

  export default {
    name: 'mt-exam-table',
    methods: {

    },
    props: {
      id: String,
      items: Array,
    },
    components: {
      MtInput,
    },
    data() {
      return {
        fields: [
          {key: '_id', label: 'ID'},
          {key: 'category', label: 'Категория'},
          {key: 'text', label: 'Въпрос'},
          {key: 'answers', label: 'Отговори'},
        ],
      };
    },
  };
</script>

<style scoped>
  .answer-input {
    width:calc(100% - 50px);
  }
  .image-url {
    max-width:100px;
    max-height:100px;
  }
</style>
