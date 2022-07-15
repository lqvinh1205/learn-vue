<template>
  <div class="wrapper">
    <div class="header">
      <div class="container">
        <HeaderAdmin />
      </div>
    </div>
    <div class="main">
      <div class="container">
        <div class="sidebar"><SidebarAdmin /></div>
        <div class="content"></div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderAdmin from "@/components/admin/HeaderAdmin.vue";
import SidebarAdmin from "@/components/admin/SidebarAdmin.vue";
export default {
  components: {
    HeaderAdmin,
    SidebarAdmin
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
  background: #00b0d7;
  height: 65px;
}
.main {
  display: flex;
}
</style>
