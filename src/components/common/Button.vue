<template>
  <button class="btn btn-primary disabled mt-1 w-100" @click="click">
    {{title}}
  </button>
</template>

<script>
  export default {
    name: 'mt-button',
    methods: {
      click() {
        this.$emit('click');
      },
    },
    props: {
      title: String,
    },
  };
</script>

<style scoped lang="scss">

</style>
