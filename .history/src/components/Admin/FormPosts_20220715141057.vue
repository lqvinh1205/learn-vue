<template>
  <div class="form_post">
    <div class="title">
      <h3>Thêm bài viết</h3>
    </div>
    <div class="input_group">
      <div class="input_item">
        <label for="title">Tiêu đề</label>
        <input type="text" id="title" placeholder="title" />
      </div>
      <div class="input_item">
        <label for="body">nội dung</label>
        <textarea name="" id="body" cols="30" rows="10"></textarea>
      </div>
      <div class="footer">
        <button>Th</button>
      </div>
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
  width: 60%;
}
.input_item input {
  height: 40px;
  border-radius: 5px;
  border: solid 1px #acacac;
  padding: 0 10px;
}
.input_item textarea {
  border-radius: 5px;
  border: solid 1px #acacac;
  padding: 0 10px;
}
.title {
  margin-bottom: 50px;
}
.input_group {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
</style>
