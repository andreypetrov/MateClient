<template>
  <div class="container pt-3">
    <div class="row">
      <div class="col">
        <b-tabs>
          <b-tab active>
            <template slot="title">
              <i class="fa fa-list-alt exams-list-icon" aria-hidden="true"></i>Списък Изпити
            </template>
            <mt-exams-list></mt-exams-list>
          </b-tab>
          <b-tab title="second" >
            <template slot="title">
              <i class="fa fa-plus-circle add-exam-icon" aria-hidden="true"></i>Създай Изпит
            </template>
            I'm the second tab content
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>

  import MtExamsList from './ExamsList';

  export default {
    name: 'mt-exams',
    components: {
      MtExamsList,
    },
  };

</script>

<style lang="scss">
  .nav-tabs {
    border-bottom:0;
    .nav-link {
      margin-right: 1px;
      background-color: #dedede;
      padding-left: 35px;
      border: 0;
      &:hover{
        background-color: #ededed;
      }
      &.active{
       background-color: #ededed;
      }
    }
    .add-exam-icon {
      color: #2b994f;
      font-size: 20px;
      position: absolute;
      left: 10px;
    }
    .exams-list-icon {
      position: absolute;
      left: 10px;
      top: 12px;
      font-size: 18px;
      color: #444444;
    }
    .nav-item {
      margin-bottom:0;
      font-size: 0.9rem;
      position: relative;
    }
  }
  .tab-content {
    background-color: #ededed;
    .tab-pane {
      padding: 15px;
    }
  }

</style>
