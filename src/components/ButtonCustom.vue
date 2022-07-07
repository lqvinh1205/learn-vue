<template>
  <button class="btn" :style="{ background }" @click="$emit('click')">{{ title }}</button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Submit",
    },
    background: {
      type: String,
      default: "#1e68ef",
    },
    click: {
      type: Function
    }
  },
  methods: {
  
  }
};
</script>

<style scoped>
.btn {
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 24px;
  color: #fff;
  box-shadow: #6f6c6c 0px 0px 10px 0;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
}
</style>
