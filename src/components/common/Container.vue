<template>
  <div class="base-container">
    <h3 class="bg-light p-3">{{header}}</h3>
    <div class="bg-light p-3">
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
  }
  h3 {
    color: #777;
    font-weight: normal;
    text-transform: uppercase;
    line-height: 17px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 11px;
    margin:0;
  }
</style>
