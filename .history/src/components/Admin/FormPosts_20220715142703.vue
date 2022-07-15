<template>
  <div class="form_post">
    <div class="title">
      <h3>Thêm bài viết</h3>
    </div>
    <div class="input_group">
      <div class="input_item">
        <label for="title">Tiêu đề</label>
        <input
          type="text"
          id="title"
          placeholder="title"
          v-model="post.title"
        />
      </div>
      <div class="input_item">
        <label for="body">Nội dung</label>
        <textarea
          name=""
          id="body"
          cols="30"
          rows="10"
          v-model="post.body"
        ></textarea>
      </div>
      <div class="footer">
        <button class="btn_add" @click="handleSubmit">Thêm mới</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: {},
    };
  },
  methods: {
    async handleSubmit() {
      if (this.$router.params.id) {
        const { data } = await axios.put(
          `https://627a486d73bad5068585f3e4.mockapi.io/posts/${this.$router.params.id})}`
        );
        this.post = data;
      } else {
        this.$store.dispatch("createPosts", this.post);
      }
    },
  },
};
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
  padding: 10px;
}
.title {
  margin: 50px 0;
  text-align: center;
  font-size: 26px;
}
.input_group {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
.footer {
  width: 60%;
  display: flex;
  justify-content: flex-end;
}
.btn_add {
  border: none;
  background: #00b0d7;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}
</style>
