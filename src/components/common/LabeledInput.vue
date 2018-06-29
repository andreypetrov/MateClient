<template>
  <b-form-group :label="label"
                label-for="to_be_replaced_by_generated_unique_id"
  >
    <b-form-input id="to_be_replaced_by_generated_unique_id"
                  type="text"
                  :value="text"
                  required
                  :placeholder="placeholder"
                  @input="input">
    </b-form-input>
  </b-form-group>
</template>

<script>
 //TODO use uuid4 to generate unique ids for inputs, so they can be referenced by their labels for accessibility purposes
  export default {
    name: 'mt-labeled-input',
    props: {
      label: String,
      text: String,
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
