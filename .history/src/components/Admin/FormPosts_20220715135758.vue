<template>
  <div class="form_post">
	<TitleComponent name="Form add" />
    <div class="input_item">
      <label for="title">Title post</label>
      <input type="text" id="title" placeholder="title" />
    </div>
  </div>
</template>

<script>
import TitleComponent from "@/components/admin/TitleComponent.vue";
export default {
	comments: {
		TitleComponent
	}
};
</script>
<style scoped>
.form_post {
}
.input_item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.input_item input {
  height: 40px;
  border-radius: 5px;
  border: solid 1px #acacac;
  padding: 0 10px;
}
</style>
