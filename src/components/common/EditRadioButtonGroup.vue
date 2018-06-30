<template>
  <b-form-group :label="label">
    <b-form-radio-group id="radio-group"
                        @input="select"
                        class="answer-form">
      <div class="row">
        <div :key="item._id" v-for="item in items">
          <span class="d-inline-block id">{{item._id}})</span>
          <b-form-radio :value="item._id" class="mr-0 answer-radio">
            <mt-input :placeholder="placeholder" :value="item.text">
            </mt-input>
          </b-form-radio>
        </div>
      </div>
    </b-form-radio-group>
  </b-form-group>
</template>

<script>
  import MtRadioInput from '../common/RadioInput';
  import MtInput from '../common/Input';

  export default {
    name: 'mt-edit-radio-button-group',
    components: {MtInput, MtRadioInput},
    data() {
      return {
        items: this.value,
      };
    },
    props: {
      placeholder: String,
      label: String,
      value: Array,
    },
    methods: {
      input(itemId) {
        console.log('inputted', itemId);
        this.$emit('input', this.localAnswers);
        this.$emit('input', this.localAnswers);
      },
      select(event) { //propagate up the answer selection
        this.$emit('select', event);
      },
    },
  };
</script>

<style scoped>
  .answer-form {
    padding: 15px 10px;
    background: #ffffff;
    border: 5px solid #dee2e6;
  }

</style>
