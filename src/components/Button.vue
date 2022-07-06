<script>
export default {
  name: "ButtonVue",
  props: {
    background: {
      type: String,
    },
    title: {
      type: String,
      default: "Submit",
    },
    color: {
      type: String,
    },
    font: {
      type: String
    },
    handleClick: {
      type: Function,
    },
    disabled: {
      type: Boolean,
    }
  },
};
</script>

<template>
  <button class="btn" :style="{ background, color, fontWeight:font }" :disabled="disabled" @click="$emit('handleClick')">
    {{ title }}
  </button>
</template>

<style scoped>
.btn {
  border: none;
  padding: 5px 20px;
  border-radius: 4px;
  color: white;
  background: #007BC3;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
}
</style>
