<template>
  <div class="header_ad">
    <div class="logo">
      <img :src="require('@/assets/logo.png')" alt="" />
      <h3>Dashboard</h3>
    </div>
    <div class="search">
      <input type="search" />
    </div>
    <div class="user">
      <h4>Xin chào, ADMIN</h4>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.header_ad {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  gap: 10px;
  height: 65px;
}
.logo img {
  height: 60px;
}
.search {
	width: 530px;

}
.search input {
	width: 100%;
	height: 35px;
	border-radius: 5px;
	border: 1px solid #acacac;
}
.user {
	width: 30%;
	display: flex;
	justify-content: flex-end;
	color: #fff;
}
</style>
