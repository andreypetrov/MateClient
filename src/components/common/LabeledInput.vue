<template>
  <b-form-group :label="label"
                :label-for="id"
  >
    <b-form-input :id="id"
                  type="text"
                  :size="size"
                  :value="value"
                  :placeholder="placeholder"
                  @input="input">
    </b-form-input>
  </b-form-group>
</template>

<script>
  //TODO use uuid4 to generate unique ids for inputs,
  // so they can be referenced by their labels for accessibility purposes
  import uuid4 from 'uuid/v4';

  export default {
    name: 'mt-labeled-input',
    props: {
      id: uuid4(),
      label: String,
      value: String,
      size: String,
      placeholder: String,
    },
    methods: {
      input(value) {
        this.$emit('input', value);
      },
    },
  };
</script>

<style scoped>

</style>
