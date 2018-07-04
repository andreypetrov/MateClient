<template>
  <b-card-body>
    <span>{{result.exam.subjectName}}</span>
    <span class="variant
            text-info
            rounded bg-dark ml-3 pl-2 pr-2 pt-1 pb-1 font-weight-light">
      Вариант: {{result.exam.variant}}
          </span>
  </b-card-body>
</template>

<script>
  export default {
    name: 'mt-result-body',
    props: {
      result: Object,
    },
  };
</script>

<style scoped>
  /*TODO extract the class .variant in a common css file*/
  .variant {
    font-size:0.8rem;
  }
</style>
