<template>
  <div>
    <mt-labeled-input class="col"
                      label="Предмет"
                      :text="value.subjectName"
                      placeholder="Въведи предмет"
                      @input="inputSubjectName">
    </mt-labeled-input>
    <mt-labeled-input class="col"
                      label="Вариант"
                      :text="value.variant"
                      placeholder="Въведи вариант"
                      @input="inputVariant">
    </mt-labeled-input>
  </div>
</template>

<script>
  import MtLabeledInput from '../common/LabeledInput';

  export default {
    name: 'mt-add-exam-details',
    components: {MtLabeledInput},
    props: {
      value: Object,
    },
    methods: {
      inputSubjectName(subjectName) {
        this.value.subjectName = subjectName;
        this.$emit('input', this.value);
      },
      inputVariant(variant) {
        this.value.variant = variant;
        this.$emit('input', this.value);
      },
    },
  };
</script>

<style scoped>

</style>
