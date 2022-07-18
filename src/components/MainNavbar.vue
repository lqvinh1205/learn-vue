<template>
  <div class="nav">
    <div class="logo">
      <img :src="require('@/assets/Logo.svg')" alt="" />
    </div>
    <div class="group_menu">
      <ul>
        <li>
          <router-link to="/">
            <img :src="require('@/assets/home.svg')" alt="" /> <span>Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <img :src="require('@/assets/home.svg')" alt="" /> <span>Post</span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <img :src="require('@/assets/home.svg')" alt="" />
            <span>Activity</span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <img :src="require('@/assets/home.svg')" alt="" />
            <span>Bookmark</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="search">
      <label>
        <img :src="require('@/assets/icon-search.svg')" alt="" />
        <input type="search" placeholder="Search will seed post" />
      </label>
    </div>
    <div class="notifycation">
		<div class="notify_icon">
			<img :src="require('@/assets/notify-icon.svg')" alt="">
		</div>
		<div class="profile">
			<img :src="require('@/assets/Avatar.svg')" alt="">
			<div class="profile_name">
				<span>Bessie Cooper</span>
				<img :src="require('@/assets/arrow-dow.svg')" alt="">
			</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  display: flex;
  flex-wrap: wrap;
  height: 60px;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #E5E5E5;
}
.logo {
  width: 100px;
  text-align: left;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 7px;
  padding-top: 5px;
}
.search {
  width: 45%;
  display: flex;
  justify-content: center;
  padding-left: 40px;
}
.search label {
  background: #f0f0f0;
  border-radius: 54px;
  padding-left: 12px;
  border: none;
  height: 40px;
  width: 280px;
  display: flex;
}
.search label img {
	width: 25px;
}
.search input {
  padding: 8px 8px 8px 12px;
  border: none;
  height: 40px;
  background: #f0f0f0;
  /* width: 280px; */
}
.search input:focus {
	outline: none;
}
.group_menu {
  width: 30%;
  height: 100%;
}
.notifycation {
  width: calc(25% - 100px);
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}
.notify_icon {
	display: flex;
	align-items: center;
}
.profile {
	display: flex;
	justify-content: flex-end;
	gap: 5px;
}
.profile_name {
	display: flex;
	align-items: center;
}
.profile_name span {
	font-size: 14px;
	font-weight: 500;
}
.group_menu ul {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  gap: 25px;
  padding-left: 30px;
}
.group_menu ul li {
  list-style: none;
  display: flex;
  align-items: center;
}
.group_menu ul li a {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 2px;
  font-size: 14px;
  text-decoration: none;
  color: #191919;
  font-weight: bold;
}
</style>
