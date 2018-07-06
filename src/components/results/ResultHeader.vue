<template>
  <div>
       <span class="
            variant
            text-info
            rounded bg-dark pl-2 pr-2 pt-1 pb-1 font-weight-light">
            <i data-v-024bf5af="" class="fa fa-user ml-1 mr-2"></i>
            {{name}}
          </span>
    <span class="
            variant
            text-light
            pull-right
            rounded bg-dark pl-2 pr-2 pt-1 pb-1 font-weight-light">
            <i data-v-024bf5af="" class="fa fa-bar-chart ml-1 mr-2"></i>
            {{translatedScore}}
          </span>
  </div>
</template>

<script>
  export default {
    name: 'mt-result-header',
    props: {
      name: String,
      score: {
        default: '',
        type: String,
      },
    },
    computed: {
      translatedScore() {
        return this.score.replace(' out of ', ' от ');
      },
    },
  };
</script>
