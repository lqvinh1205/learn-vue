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
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.logo {
		width: 20%;
		display: flex;
	}
</style>
