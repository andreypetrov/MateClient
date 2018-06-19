<template>
  <mt-container header="Добави Ученик">
    <mt-input pholder="Име" v-model="name"></mt-input>
    <mt-input pholder="Клас" v-model="group"></mt-input>
    <mt-input pholder="Аватар" v-model="avatar"></mt-input>
    <mt-button @click="click" title="Добави"></mt-button>
  </mt-container>
</template>

<script>
  import MtButton from '../common/Button';
  import MtContainer from '../common/Container';
  import MtInput from '../common/Input';
  import Api from '../../util/api';

  export default {
    data() {
      return {
        name: '',
        group: '',
        avatar: '',
      };
    },
    methods: {
      click() {
        Api.fetch({
          method: 'post',
          url: 'students',
          data: {
            name: this.name,
            group: this.group,
            avatar: this.avatar,
          },
          success: (response) => {
            console.log(response);
          },
        });
      },
    },
    components: {
      MtInput,
      MtButton,
      MtContainer,
    },
  };
</script>

<style scoped>

</style>
