<script>
export default {
  name: "option-select",
  props: ["data", "listChecked"],
  methods: {
    isChecked(id) {
      return this.listChecked.indexOf(id) > -1;
    },
  },
  setup() {},
};
</script>

<template>
  <ul>
    <li v-for="item in data" :key="item.code" class="option">
      <input
        type="checkbox"
        :id="item.code"
        :checked="isChecked(item.code)"
        @change="$emit('handle-check', item.code)"
      />
      <label :for="item.code">{{ item.name }}</label>
    </li>
  </ul>
</template>
<style scoped>
ul {
  margin: 0 !important;
}
.option {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px;
  z-index: 10;
  position: relative;
}
input {
  height: 16px;
  width: 18px;
  color: #000;
}
input[type="checkbox"]:checked {
  accent-color: #45D1C9;
}
.tick {
  height: 16px;
  width: 18px;
  background: #000;
}
label {
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
}
</style>
