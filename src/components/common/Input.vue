<template>
  <input class="form-control mb-2"
         type="text"
         :placeholder="pholder"
         :value="text"
         @input="input"/>
</template>

<script>
  export default {
    name: 'mt-input',
    methods: {
      input(event) {
        this.$emit('input', event.target.value);
      },
    },
    props: {
      pholder: String,
      text: String,
    },
  };
</script>

<style scoped>

</style>
