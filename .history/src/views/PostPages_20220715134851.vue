<template>
  <div class="post_page">
    <div class="header_post_pages">
      <TitleComponent name="Post" class="title" />
      <button class="btn_add"><router-link to="/post/add">Add Post</router-link></button>
    </div>
    <TablePost />
  </div>
</template>
<script>
import TablePost from "@/components/admin/TablePosts.vue";
import TitleComponent from "@/components/admin/TitleComponent.vue";
export default {
  components: {
    TablePost,
    TitleComponent,
  },
  data() {
    return { post: [] };
  },
  created() {
    this.$store.dispatch('getPosts')
  },
};
</script>

<style scoped>
.title {
  margin-bottom: 50px;
}
.header_post_pages {
  display: flex;
  justify-content: space-between;
}
.btn_add {
  height: 40px;width: 90px;
  background: rgb(22, 107, 244);
  border: none;
}
</style>
