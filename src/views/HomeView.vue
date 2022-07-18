<template>
  <div class="wrapper">
    <div class="navbar">
      <MainNavbar />
    </div>
    <div class="main">
      <div class="sidebar">
        <MainSidebar />
      </div>
      <div class="content"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainNavbar from "@/components/MainNavbar.vue";
import MainSidebar from "@/components/MainSidebar.vue";

export default {
  name: "HomeView",
  components: {
    MainNavbar,
    MainSidebar,
  },
};
</script>
<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
}
.sidebar {
  width: 260px;
}
.content {
  width: calc(100% - 260px);
  background: #f8f8f8;
}
</style>
