<template>
  <div class="modal_wrapper" v-if="isShow">
    <div class="modal_main">
		<div class="text">
			{{text}}
		</div>
		<div class="footer">
			<button class="btn_modal">Hủy</button>
			<button class="btn_modal">Đồng ý</button>
		</div>
	</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			isShow: true,
			text: "Xác nhận"
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
	box-shadow: 2px 2px 10px  rgb(0, 0, 0);
	border-radius: 4px;
}
.text {
	text-align: center;
	padding: 30px;
	font-size: 25px;
	font-weight: bold;
}
.footer {
	display: flex;
	justify-content: center;
	gap: 10px;
	align-items: flex-end;
}
</style>
