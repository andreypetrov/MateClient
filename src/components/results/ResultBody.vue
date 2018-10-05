<template>
  <b-card-body>

    <div class="student-data">
      <div class="row">
        <div class="col-md-5">
          <div class="student-results-details">
            <img class="student-avatar" :src="getAvatar">
            <div class="student-results-info">
              <div class="data-row-container">
                <span class="gray-label">Име: </span>
                <span class="right-label">
                  {{result.student.name}}
                </span>
              </div>
              <div class="data-row-container">
                <span class="gray-label align-self-center">Клас: </span>
                <span class="text-info bg-dark px-2 rounded right-label">
                  {{result.student.group}}
                </span>
              </div>
              <div class="data-row-container mt-3">
                <span class="gray-label align-self-center">
                  Начало на изпита:
                </span>
                <span class="right-label">
                  {{getStartDate}}
                </span>
              </div>
              <div class="data-row-container">
                <span class="gray-label align-self-center">
                  Край на изпита:
                </span>
                <span class="right-label">
                  {{getEndDate}}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7">
            <div class="student-results-details h-100">
              <div class="subject-name-container d-flex">
                <span class="gray-label">Предмет: </span>
                <span class="subject-name-text ml-auto">{{result.exam.subjectName}}</span>
                <div class="variant-container">
                  <span class="variant
                      text-info
                      rounded ml-3 pl-2 pr-2 pt-1 pb-1 font-weight-light">
                      Вариант: {{result.exam.variant}}
                </span>
                </div>
              </div>
              <div class="d-flex percentage-container">
                <span class="gray-label align-self-end">Успеваемост: </span>
                <span
                  v-bind:class="getPercentageClass(result.score)"
                  class="percentage ml-auto align-self-end">
                  {{getPercentage}} %
                </span>
              </div>
          </div>
        </div>
      </div>
    </div>


    <div class="answers-list mt-3">
      <div v-if="result.questions.length"
           v-for="(question, index) in result.questions"
           :key="question._id"
           :id="question._id"
           class="answers-list-item row"

      >
        <div class="col-md-7">
          <div>
            <div class="question-counter d-inline-block">
              <span>{{index}}</span>
            </div>
            <span class="question-label gray-label">
              Въпрос:
            </span>
            <span class="question-text">{{question.text}}</span>
          </div>
        </div>
        <div class="col-md-2">
          <span class="correct-answer-label gray-label">
            Верен отговор:
          </span>
          <span class="correct-answer-value">
            {{question.correctAnswer}}
          </span>
        </div>
        <div class="col-md-3">
          <div class="d-flex">
            <span class="answer-given-label gray-label align-self-center">
                Даден отговор:
            </span>
            <span class="answer-given-value align-self-center"
                  v-bind:class="getAnswerClass(question.givenAnswer, question.correctAnswer)"
            >
              {{question.givenAnswer}}
            </span>
            <div class="answer-evaluation-container ml-auto mr-3">
              <span class="answer-evaluation"
                    v-bind:class="getEvaluationClass(question.givenAnswer, question.correctAnswer)"
              ></span>
            </div>
          </div>
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
        let avatarImage = this.result.student.avatar;
        if (!avatarImage) {
          avatarImage = '/static/images/avatar.png';
        }
        return avatarImage;
      },
      getStartDate() {
        const startDate = new Date(this.result.dateStarted).toLocaleString();
        return startDate;
      },
      getEndDate() {
        const endDate = new Date(this.result.dateFinished).toLocaleString();
        return endDate;
      },
      getPercentage() {
        const percentage = this.calculatePercentage(this.result.score);
        return percentage;
      },
    },
    methods: {
      getPercentageClass(score) {
        const resultPercentage = this.calculatePercentage(score);
        if (resultPercentage > 50) {
          return 'success-label';
        }
        if (resultPercentage < 50) {
          return 'error-label';
        }
        return 'warning-label';
      },
      calculatePercentage(score) {
        let percentage = '0.00';
        if (score) {
          let result = score.split('/');
          result = (result[0] / result[1]) * 100;
          percentage = parseFloat(result).toFixed(2);
        }

        return percentage;
      },
      getEvaluationClass(givenAnswer, correctAnswer) {
        if (givenAnswer === correctAnswer) {
          return 'success-evaluation';
        }
        return 'error-evaluation';
      },
      getAnswerClass(givenAnswer, correctAnswer) {
        if (givenAnswer === correctAnswer) {
          return 'success-label';
        }
        return 'error-label';
      },
    },
  };
</script>

<style scoped lang="scss">

  .student-results-details {
    display: flex;
    flex-wrap: wrap;
    background: #232323;
    padding: 1rem;
    border-radius: 0.5rem;

  }

  .student-results-info {
    flex: 1;
  }

  .data-row-container {
    flex: 1 1 100%;
    display: flex;
  }
  .right-label {
    margin-left: auto;
  }
  .gray-label {
    color: #bfbfbf;
    font-size: 0.675rem !important;
    text-transform: uppercase;
    margin-right: 10px;
  }
  .student-avatar {
    min-width: 100px;
    min-height: 100px;
    max-width: 100px;
    max-height: 100px;
    border-radius: 4px;
    box-shadow: 0 2px 4px #101010;
    margin-right: 1rem;
  }
  .question-label {
    margin-left: 5px;
  }
  .question-text {
    color: #ffffff;
  }

  .percentage {
    font-size: 2rem;
    padding-top: 1rem;
    font-weight: bold;
  }
  .subject-name-container {
    flex: 1 1 100%;
  }
  .percentage-container {
    flex: 1 1 100%;
  }
  .variant-container {
    min-width: 100px;
  }
  .correct-answer-value {
    text-transform: uppercase;
  }
  .answer-given-value {
    text-transform: uppercase;
  }

  .success-label {
    color: #50f750;
  }
  .error-label {
    color: red;
  }
  .warning-label {
    color: yellow;
  }
  .success-evaluation {
    background-color: #50f750;
  }
  .error-evaluation {
    background-color: red;
  }

  .answer-evaluation-container {
    border-radius: 50%;
    background-color: black;
    border: 1px solid #555;
    width: 26px;
    height: 26px;
    padding: 3px;
    .answer-evaluation {
      border-radius: 50%;
      width: 18px;
      height: 18px;
      display: inline-block;
    }
  }


</style>
