<template>
  <div class="container-fluid pt-3">
    <div class="row">
      <div class="col">
        <b-tabs>
          <b-tab active>
            <template slot="title">
              <i class="fa fa-list-alt exams-list-icon" aria-hidden="true"></i>Списък Изпити
            </template>
            <mt-exams-list></mt-exams-list>
          </b-tab>
          <b-tab title="second">
            <template slot="title">
              <i class="fa fa-plus-circle add-exam-icon" aria-hidden="true"></i>Създай Изпит
            </template>
            <mt-add-exam></mt-add-exam>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>

  import MtExamsList from './ExamsList';
  import MtAddExam from './AddExam';

  export default {
    name: 'mt-exams',
    components: {
      MtExamsList,
      MtAddExam,
    },
  };

</script>
