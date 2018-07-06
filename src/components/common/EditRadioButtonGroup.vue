<template>
  <b-form-group :label="label">
    <b-form-radio-group @input="select"
                        v-model="selected"
                        class="answer-form">
      <div :key="item._id" v-for="item in value" class="d-flex holder align-items-center"
           v-bind:class="getSelectedClass(item._id)">
        <span class="d-inline-block id">{{item._id}})</span>
        <b-form-radio :value="item._id" class="ml-2 mr-0">

        </b-form-radio>
        <b-form-input v-model="item.text"
                      type="text"
                      size="sm"
                      class="radio-input"
                      @input="input"
                      :placeholder="placeholder"></b-form-input>
      </div>
    </b-form-radio-group>
  </b-form-group>
</template>

<script>
  import MtInput from '../common/Input';

  export default {
    name: 'mt-edit-radio-button-group',
    components: {MtInput},

    props: {
      placeholder: String,
      label: String,
      value: Array,
      selected: String,
    },
    methods: {
      input() {
        this.$emit('input', this.value);
      },
      select(selected) { //propagate up the answer selection
        this.$emit('select', selected);
      },
      getSelectedClass(id) {
        if (id === this.selected) {
          return 'active';
        }
        return '';
      },
    },
  };
</script>

<style scoped lang="scss">
  .holder {
    padding: 6px 3px 3px 5px;
    border-radius: 0.25rem;
    border: 1px solid transparent;
    margin-left: 10px;
  }

  .active {
    background: #94ff3b;
    border: 1px solid #67c343;
  }

  .radio-form-group {
    width: calc(100% - 19px);
  }

  .radio-form-group label {
    width: calc(100% - 19px);
  }

  .radio-input {
    margin-top: -3px;
  }

  .id {
    min-width: 15px;
    text-transform: uppercase;
  }

</style>
