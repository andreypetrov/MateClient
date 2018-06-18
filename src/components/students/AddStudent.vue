<template>
  <div class="base-container">
    <h3 class="bg-secondary p-3">Добави ученик</h3>
    <div class="bg-light p-3">
      <mt-input pholder="Име" v-model="name"></mt-input>
      <mt-input pholder="Клас" v-model="group"></mt-input>
      <mt-input pholder="Аватар" v-model="avatar"></mt-input>
      <mt-button title="Добави"></mt-button>
    </div>
  </div>
</template>

<script>
  import MtButton from '../common/Button';
  import MtInput from '../common/Input';

  export default {
    name: 'mt-add-student',
    data() {
      return {
        name: '',
        group: '',
        avatar: '',
      };
    },
    components: {
      MtInput,
      MtButton,
    },
  };
</script>

<style scoped>

</style>
