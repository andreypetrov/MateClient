<template>
  <b-card no-body class="mb-1 rounded-0">
    <b-card-header header-tag="header" class="p-0 rounded-0">
      <b-btn class="rounded-0 text-left"
             block href="#"
             v-b-toggle="id"
             variant="light">
        <slot name="header"></slot>
      </b-btn>
    </b-card-header>
    <b-collapse :id="id" accordion="my-accordion">
      <slot></slot><!-- body slot is the default slot, so no need to name it-->
    </b-collapse>
  </b-card>
</template>

<script>
  import uuid4 from 'uuid/v4';

  export default {
    name: 'mt-collapsible',
    data() {
      return {
        id: uuid4(),
      };
    },
  };
</script>

<style scoped>

</style>
