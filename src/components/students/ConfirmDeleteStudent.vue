<template>
  <div>
    <p>
      Сигурен ли си, че искаш да изтриеш ученик
    </p>
    <p class="current-student mb-0">
      {{name}}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'mt-confirm-delete-student',
    props: {
      name: String,
    },
  };
</script>

<style scoped>
  .current-student {
    color: #2992c7;
  }
</style>
