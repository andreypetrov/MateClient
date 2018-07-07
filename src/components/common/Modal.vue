<template>
  <b-modal v-model="value.isVisible"
           :title="value.title"
           @ok="ok"
           ok-title="Да"
           cancel-title="Откажи"
  >
    <mt-confirm-delete :question="value.subtitle" :data="value.text"></mt-confirm-delete>
  </b-modal>
</template>

<script>
  import MtConfirmDelete from '../common/ConfirmDelete';

  export default {
    name: 'mt-modal',
    props: {
      value: Object, //value can contain any arbitrary properties we want to pass
    },
    methods: {
      ok() {
        this.$emit('ok', this.value);
      },
    },
    components: {
      MtConfirmDelete,
    },
  };
</script>

<style scoped>

</style>
