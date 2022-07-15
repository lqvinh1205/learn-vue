<template>
  <div class="post_page">
    <TitleComponent name="Post"/>
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

<style scoped></style>
