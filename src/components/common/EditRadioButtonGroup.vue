<template>
  <b-form-group :label="label">
    <b-form-radio-group id="radio-group"
                        @input="select"
                        class="answer-form">
      <div class="row">
        <div :key="item._id" v-for="item in items" class="holder mb-2">
          <span class="d-inline-block id">{{item._id}})</span>
          <b-form-radio :value="item._id" class="mr-0 radio">
            <mt-input :placeholder="placeholder" :value="item.text">
            </mt-input>
          </b-form-radio>
        </div>
      </div>
    </b-form-radio-group>
  </b-form-group>
</template>

<script>
  import MtInput from '../common/Input';

  export default {
    name: 'mt-edit-radio-button-group',
    components: {MtInput},
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
  .holder {
    padding: 3px 3px 3px 5px;
    border-radius: 0.25rem;
    border: 1px solid transparent;
  }
  .holder-selected {
    background: #d8ffe5;
    border: 1px solid #c8f3d6;
  }

  .radio {
    width: calc(100% - 20px);
  }

  .id {
    min-width: 15px;
  }
</style>
