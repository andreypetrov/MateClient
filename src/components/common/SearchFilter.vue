<template>
  <div class="search-container">
    <mt-input pholder="Търси" v-model="search"></mt-input>
    <i class="fa fa-search" aria-hidden="true"></i>
  </div>
</template>

<script>
  import MtInput from './Input';

  export default {
    name: 'mt-search-filter',
    data() {
      return {
        search: '',
      };
    },
    methods: {
      input(event) {
        this.$emit('input', event.target.value);
      },
    },
    components: {
      MtInput,
    },
  };
</script>

<style scoped>
  .search-container {
    position:relative;
  }
  .fa-search {
    position: absolute;
    top: 11px;
    right: 13px;
    color: #c5c5c5;
  }
</style>
