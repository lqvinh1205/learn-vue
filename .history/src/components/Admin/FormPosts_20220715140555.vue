<template>
  <div class="form_post">
    <div class="title">
      <h3>Form add</h3>
    </div>
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
  gap: 5px;
  justify-content: center;
}
.input_item input {
  width: 60%;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #acacac;
  padding: 0 10px;
}
.title {
  margin-bottom: 50px;
}
</style>
