<template>
  <div class="row align-items-end">
    <mt-labeled-input class="col-md-8"
                      label="Предмет"
                      :value="value.subjectName"
                      placeholder="Въведи предмет"
                      @input="inputSubjectName">
    </mt-labeled-input>
    <mt-labeled-input class="col-md-2"
                      label="Вариант"
                      :value="value.variant"
                      placeholder="Въведи вариант"
                      @input="inputVariant">
    </mt-labeled-input>
    <div class="col-md text-right">
      <slot></slot>
    </div>
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
