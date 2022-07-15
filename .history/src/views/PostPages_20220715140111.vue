<template>
  <div class="post_page">
    <div class="header_post_pages">
      <TitleComponent name="Post" class="title" />
      <router-link to="/post/add">
        <button class="btn_add">Add post</button>
      </router-link>
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
    this.$store.dispatch("getPosts");
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
  height: 40px;
  width: 90px;
  background: rgb(22, 107, 244);
  border: none;
  border-radius: 5px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
}
.btn_add {
  color: #fff;
  text-decoration: none;
}
</style>
