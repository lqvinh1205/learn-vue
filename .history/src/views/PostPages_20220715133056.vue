<template>
  <div class="post_page">
    <TitleComponent name="Post" class="title"/>
    <TablePost />
  </div>
</template>
<script>
import TablePost from "@/components/admin/TablePosts.vue";
import TitleComponent from "@/components/admin/TitleComponent.vue";
export default {
  components: {
    TablePost,
    TitleComponent
  },
};
</script>

<style scoped>
.title{
  margin-bottom: 50px;
}</style>
