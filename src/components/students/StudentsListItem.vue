<template>
  <div class="list-group-item p-2">
    <img class="avatar" :src="getAvatar">
    <span class="user-info">
      <span class="user-group m-2 p-1">{{ group }}</span>
      <span class="user-name">{{ name }}</span>
      <div class="buttons-container">
        <span class="view-results mr-2 p-1"
              @click="showStudentResult(id)"
        >
          <i class="fa fa-bar-chart" aria-hidden="true"></i>
        </span>
        <span class="remove-student"
              @click="setCurrentStudent"
              v-b-modal.modalDeleteStudent>
          <i class="fa fa-times" aria-hidden="true"></i>
        </span>
      </div>
    </span>
  </div>
</template>

<script>
  import mutations from '../../store/mutation-types';

  export default {
    name: 'mt-student-list-item',
    props: {
      avatar: {
        type: String,
      },
      group: {
        default: '-',
        type: String,
      },
      name: String,
      id: String,
    },
    computed: {
      getAvatar() {
        let avatar = this.avatar;
        if (!avatar) {
          avatar = '/static/images/avatar.png';
        }
        return avatar;
      },
    },
    methods: {
      setCurrentStudent() {
        const student = this.$store.getters.getStudentById(this.id);
        this.$store.commit(mutations.SET_CURRENT_STUDENT, student);
      },
      showStudentResult(studentId) {
        this.$router.push({
          path: 'results',
          query: {studentId},
        });
      },
    },
  };
</script>

<style scoped>
  .avatar {
    position: absolute;
    top: 0.5em;
    min-width: 50px;
    min-height: 50px;
    max-width: 50px;
    max-height: 50px;
    border-radius: 4px;
    box-shadow: 0 2px 4px #101010;
  }

  .user-info {
    border: 1px solid #eaeaea;
    background: #f4f4f4;
    color: #666;
    width: calc(100% - 60px);
    border-radius: 4px;
    height: 50px;
    display: inline-block;
    margin-left: 60px;
    line-height: 47px;
  }

  .user-group {
    color: #289e9b;
    background-color: white;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
  }

  .buttons-container {
    position: absolute;
    right: 20px;
    top: 10px;
  }

  .view-results {
    border-radius: 50%;
    background-color: #2b994f;
    font-size: 14px;
    border: 1px solid #217f3b;
    color: #fff;
    cursor: pointer;
  }

  .remove-student {
    border-radius: 50%;
    background-color: #c5c5c5;
    padding: 2px 5px;
    color: #fff;
    cursor: pointer;
  }
</style>
