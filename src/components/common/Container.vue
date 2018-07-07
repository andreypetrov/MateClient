<template>
  <div class="base-container">
    <h3 class="p-3">{{header}}</h3>
    <div class="p-3">
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mt-container',
    props: {
      header: String,
    },
  };
</script>

<style scoped>
  .base-container {
    border: 1px solid rgba(0,0,0,0.1);
    background-color: #545454;
    color: #dedede;
  }
  h3 {
    font-weight: normal;
    text-transform: uppercase;
    line-height: 17px;
    background-color: #636363;
    border-bottom: 1px solid #403f3f;
    font-size: 11px;
    margin:0;
  }
</style>
