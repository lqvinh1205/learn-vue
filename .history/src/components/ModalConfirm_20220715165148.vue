<template>
  <div class="modal_wrapper" v-if="isShow">
    <div class="modal_main"></div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			isShow: true
		}
	}
};
</script>

<style scoped>
.modal_wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.273);
}
.modal_main {
	position: fixed;
	top: 20%;
	left: calc(50% - 250px);
	width: 500px;
	height: 220px;
	background: #fff;
	box-shadow: 2px 2px 10px 0 #000;
	border-radius: 4px;
}
</style>
