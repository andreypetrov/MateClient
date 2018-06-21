<template>
  <div class="container pt-3">
    <div class="row">
      <div class="col">
        <div>
          <b-tabs>
            <b-tab title="first" active>
              I'm the first fading tab
            </b-tab>
            <b-tab title="second" >
              I'm the second tab content
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

//  import MtAddStudent from './AddStudent';
//  import MtStudentsList from './StudentsList';

  export default {
    name: 'mt-exams',
    components: {
//      MtAddStudent,
//      MtStudentsList,
    },
  };

</script>

<style lang="scss">
  .nav-tabs {
    .nav-link {
      border-radius: 0;
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
  }
  .tab-content {
    background-color: #ededed;
    .tab-pane {
      padding: 15px;
    }
  }

</style>
