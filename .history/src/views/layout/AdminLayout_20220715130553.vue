<template>
  <div class="wrapper">
    <div class="header">
      <div class="container">
        <HeaderAdmin />
      </div>
    </div>
    <div class="main">
      <div class="sidebar"></div>
      <div class="content"></div>
    </div>
  </div>
</template>
<script>
import HeaderAdmin from "@/components/admin/HeaderAdmin.vue";
export default {
  components: {
    HeaderAdmin,
  },
};
</script>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}
.wrapper {

}
.header {
  background: #00B0D7;
}
</style>
