<template>
  <div class="sidebar">
    <ul>
      <li>
        <router-link to="/">
          <img :src="require('@/assets/new.svg')" alt="" />
          <span>News</span>
        </router-link>

        <span class="notify_count">12</span>
      </li>
      <li>
        <router-link to="/">
          <img :src="require('@/assets/new.svg')" alt="" />
          <span>Technology</span>
        </router-link>

        <span class="notify_count">12</span>
      </li>
      <li>
        <router-link to="/">
          <img :src="require('@/assets/new.svg')" alt="" />
          <span>Music</span>
        </router-link>

        <span class="notify_count">12</span>
      </li>
      <li>
        <router-link to="/">
          <img :src="require('@/assets/new.svg')" alt="" />
          <span>Feeback</span>
        </router-link>

        <span class="notify_count">99+</span>
      </li>
    </ul>
    <ul>
      <li>
        <router-link to="/">
          <img :src="require('@/assets/check.svg')" alt="" />
          <span>Survey</span>
        </router-link>

        <span class="notify_count">12</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.sidebar {
  width: 260px;
  background: #ffffff;
  border-right: 1px solid #e5e5e5;
  min-height: calc(100vh - 60px);
}
.sidebar ul {
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;

}
.sidebar ul li {
  border-radius: 20px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: #007c7c; */
  height: 40px;
  padding: 8px 16px;
}
.sidebar ul li a {
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  gap: 12px;
  height: 40px;
  width: 100%;
  color: #000;
}
/* .sidebar ul li a.router-link-exact-active .sidebar ul li {
  background: #007c7c;
} */
.sidebar ul li:hover {
  background: #007c7c;
}
.sidebar ul li:hover a {
  color: #fff;
}
.sidebar ul li a img {
  fill: rgb(224, 224, 224);
  object-fit: contain;
}
.sidebar ul:nth-child(2) li a img {
	padding: 0 5px;
}
.notify_count {
  font-size: 14px;
  color: #fff;
  background: #e72511;
  border-radius: 40px;
  padding: 0 6px;
}
</style>
