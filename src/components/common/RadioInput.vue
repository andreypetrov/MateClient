<template>
  <div class="holder mb-2">
    <span class="d-inline-block id">{{item._id}})</span>
    <b-form-radio v-model="item._id" class="mr-0 radio" @input="input">
      <b-form-input class="px-1 py-0"
                    type="text"
                    v-model="item.text"
                    :placeholder="placeholder">
      </b-form-input>
    </b-form-radio>
  </div>
</template>

<script>
  export default {
    name: 'mt-radio-input',
    props: {
      item: Object,
      placeholder: String,
    },
    methods: {
      input(event) {
        console.log('helloou', event);
        this.$emit('input', event);
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
