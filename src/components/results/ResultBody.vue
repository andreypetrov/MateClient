<template>
  <b-card-body>

    <div class="student-data">
      <div class="d-flex">
        <img class="student-avatar" :src="getAvatar">
        <div class="student-name">
          {{result.student.name}}
        </div>
        <div class="student-group">
          {{result.student.group}}
        </div>
      </div>
    </div>

    <span class="subject-name">{{result.exam.subjectName}}</span>
    <span class="variant
            text-info
            rounded ml-3 pl-2 pr-2 pt-1 pb-1 font-weight-light">
      Вариант: {{result.exam.variant}}
          </span>

    <div class="answers-list mt-3">
      <div v-if="result.questions.length"
           v-for="(question) in result.questions"
           :key="question._id"
           :id="question._id"
           class="answers-list-item row"

      >
        <div class="col-md-7">
          <span class="question-label">
            Въпрос:
          </span>
          <span>{{question.text}}</span>
        </div>
        <div class="col-md-2">
          <span class="correct-answer-label">
            Верен отговор:
          </span>
          <span class="correct-answer-value">
            {{question.correctAnswer}}
          </span>
        </div>
        <div class="col-md-2">
          <span class="answer-given-label">
            Даден отговор:
          </span>
          <span class="answer-given-value">
            {{question.givenAnswer}}
          </span>
        </div>

      </div>
    </div>

  </b-card-body>
</template>

<script>
  export default {
    name: 'mt-result-body',
    props: {
      result: Object,
    },
    computed: {
      getAvatar() {
        let avatar = this.result.student.avatar;
        if (!avatar) {
          avatar = '/static/images/avatar.png';
        }
        return avatar;
      },
    },
  };
</script>

<style scoped>
  .student-avatar {
    min-width: 100px;
    min-height: 100px;
    max-width: 100px;
    max-height: 100px;
    border-radius: 4px;
    box-shadow: 0 2px 4px #101010;
  }
</style>
