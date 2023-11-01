<template>
  <div class="my-dialog" v-if="visible">
    <div class="dialog-box">
      <div class="dialog-header">
        <span class="title">{{ title }}</span>
        <span class="close"><i class="el-icon-close" @click="closeDialog"></i></span>
        <span class="clearfix"></span>
      </div>
      <div class="dialog-content">
        <slot></slot>
      </div>
      <div class="dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
      required: true
    },
    title: {
      type: String,
      default: '标题'
    }
  },
  methods: {
    closeDialog() {
      // eslint-disable-next-line vue/custom-event-name-casing
      this.$emit('closeDialog', false)
      console.log('关闭 dialog')
    }
  }
}
</script>

<style>
</style>
