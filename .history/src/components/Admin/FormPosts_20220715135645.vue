<template>
  <div class="form_post">
    <div class="input_item">
      <label for="title">Title post</label>
      <input type="text" id="title" placeholder="title" />
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.form_post {
}
.input_item {
  display: flex;
  flex-direction: column;
}
.input_item input {
  height: 40px;
  border-radius: 5px;
  border: solid 1px #acacac;
}
</style>
