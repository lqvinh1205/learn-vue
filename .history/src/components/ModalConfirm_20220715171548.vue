<template>
  <div class="modal_wrapper" v-if="show">
    <div class="modal_main">
      <div class="text">
        {{ text }}
      </div>
      <div class="footer">
        <button class="btn_modal_cancel" @click="toggle">Hủy</button>
        <button class="btn_modal_ok">Đồng ý</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show", "toggle"],
  data() {
    return {
      text: "Xác nhận",
    };
  },
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
  height: 180px;
  background: #fff;
  box-shadow: 2px 2px 10px rgb(0, 0, 0);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.text {
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}
.footer {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.btn_modal_cancel {
  padding: 5px 20px;
  background: rgb(218, 36, 36);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  box-shadow: 1px 1px 5px rgb(0, 0, 0);
  cursor: pointer;
}
.btn_modal_ok {
  padding: 5px 20px;
  background: #00b0d7;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  box-shadow: 1px 1px 5px rgb(0, 0, 0);
  cursor: pointer;
}
</style>
