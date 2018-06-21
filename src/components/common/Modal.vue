<template>
  <transition name="modal">
    <div class="modal" style="display: block" tabindex="-1">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">
              {{title}}
            </h4>
          </div>

          <div class="modal-body">
            <slot></slot>
          </div>

          <div class="modal-footer">
            <button type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal">{{cancel}}</button>
            <button type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                    @click="click">{{ok}}</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'mt-modal',
    data() {
      return {
        search: '',
      };
    },
    methods: {
      click() {
        this.$emit('click');
      },
    },
    props: {
      title: String,
      ok: {
        default: 'Да',
        type: String,
      },
      cancel: {
        default: 'Откажи',
        type: String,
      },
    },

  };
</script>

<style scoped>
  .modal-content {
    border-radius: 0;
  }
  .modal-title {
    margin-bottom: 0;
    line-height: 1.5;
    font-size: 0.75rem;
    text-transform: uppercase;
  }
  .modal-header {
    padding: 15px;
    border-bottom: 1px solid #b9b7b7;
    min-height: 16.42857143px;
    background: #3fc378;
    color: #fff;
    font-weight: normal;
    border-radius: 0;
  }
  .modal-footer {
    margin-top: 15px;
    padding: 8px;
    text-align: right;
    border-top: 1px solid #e5e5e5;
    background-color: #f3f3f3;
  }
</style>
