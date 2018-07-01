<template>
  <b-form-group :label="label">
    <b-form-radio-group id="radio-group"
                        @input="select"
                        class="answer-form">
      <div class="row">
        <div :key="item._id" v-for="item in items" class="holder mb-2"
             v-bind:class="getSelectedClass(item._id)">
          <span class="d-inline-block id">{{item._id}})</span>
          <b-form-radio :value="item._id" class="mr-0">

            <b-form-input v-model="item.text"
                          type="text"
                          size="sm"
                          class="radio-input"
                          :placeholder="placeholder"></b-form-input>
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
        selected: '',
      };
    },
    props: {
      placeholder: String,
      label: String,
      value: Array,
    },
    methods: {
      select(event) { //propagate up the answer selection
        this.selected = event;
        this.$emit('select', event);
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
    margin-left:10px;
  }
  .active {
    background: #fdf569;
    border: 1px solid #ceb220;
  }
  .radio-input {
    margin-top: -3px;
  }
  .id {
    min-width: 15px;
    text-transform: uppercase;
  }

</style>
