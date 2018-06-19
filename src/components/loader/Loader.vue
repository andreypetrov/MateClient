<template>
  <div v-show="isLoading" class="loader"></div>
</template>

<script>
  import './loader.scss';

  export default {
    data() {
      return {
        isLoading: false,
      };
    },
    methods: {
      toggle() {

      },
    },
  };
</script>
