<template>
  <div class="container-fluid pt-3">
    <div class="row">
      <div class="col">
        <mt-add-student></mt-add-student>
      </div>
      <div class="col-md-8">
        <mt-students-list></mt-students-list>
      </div>
    </div>
  </div>
</template>

<script>

  import MtAddStudent from './AddStudent';
  import MtStudentsList from './StudentsList';

  export default {
    name: 'mt-students',
    components: {
      MtAddStudent,
      MtStudentsList,
    },
  };

</script>

<style scoped>

</style>
