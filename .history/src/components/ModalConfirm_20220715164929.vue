<template>
  <div class="modal_wrapper" v-if="">
    <div class="modal_main"></div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			isShow: false
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
</style>
