<template>
  <b-form-group :label="label"
                label-for="to_be_replaced_by_generated_unique_id"
  >
    <b-form-textarea id="to_be_replaced_by_generated_unique_id"
                  type="text"
                  :size="size"
                  :value="value"
                  required
                  :rows="3"
                  :placeholder="placeholder"
                  @input="input">
    </b-form-textarea>
  </b-form-group>
</template>

<script>
 //TODO use uuid4 to generate unique ids for inputs,
 // so they can be referenced by their labels for accessibility purposes
  export default {
    name: 'mt-labeled-text-area',
    props: {
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
