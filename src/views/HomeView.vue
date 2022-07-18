<template>
  <div class="wrapper">
    <div class="navbar">
      <MainNavbar />
    </div>
    <div class="main">
      <div class="sidebar"></div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainNavbar from "@/components/MainNavbar.vue";

export default {
  name: "HomeView",
  components: {
    MainNavbar,
  },
};
</script>
