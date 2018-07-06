<template>
  <div>
    <p>
      {{question}}
    </p>
    <p class="current-student mb-0" v-html="data">
    </p>
  </div>
</template>

<script>
  export default {
    name: 'mt-confirm-delete',
    props: {
      question: String,
      data: String,
    },
  };
</script>

<style scoped>
  .current-student {
    color: #2992c7;
  }
</style>
