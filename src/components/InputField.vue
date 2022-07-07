<template>
  <!-- <div>
    <label for="email"> FulllName: </label>
    <input type="text" name="email" />
    <span>The field is required! </span>
  </div> -->
  <label :for="name" class="input">
    <span class="label-name">{{ name }}</span>
    <input :type="type" :name="name" />
    <span class="error">{{ msg }} </span>
  </label>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "Name",
    },
    type: {
      type: String,
      default: "text",
    },
    msg: {
      type: String,
      default: "The field is required!",
    },
  },
};
</script>
<style scoped>
.input {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.label-name {
  font-size: 16px;
  margin-bottom: 8px;
}
input {
  width: 100%;
  height: 40px;
  background: #fff;
  border: 1px solid #aa4651;
  box-shadow: 0 0 4px 0 #f4b6c1;
  color: #586068;
  padding: 8px 16px;
  border-radius: 4px;
}
.error {
  margin-top: 8px;
  color: #aa4651;
  font-size: 12px;
}
</style>
