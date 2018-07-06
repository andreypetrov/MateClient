<template>
  <div>
    <span>{{subjectName}}</span>
    <span
      class="variant
            text-info
            rounded ml-3 pl-2 pr-2 pt-1 pb-1 font-weight-light"
    >Вариант: {{variant}}
          </span>
  </div>
</template>

<script>
  export default {
    name: 'mt-exam-header',
    props: {
      subjectName: String,
      variant: String,
    },
  };
</script>
