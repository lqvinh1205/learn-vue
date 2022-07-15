<template>
  <div class="pagination_main">
    <button class="btn_pagination">-</button>
    <button class="btn_pagination">-</button>
    <button class="btn_pagination">-</button>
    <button class="btn_pagination">-</button>
    <button class="btn_pagination">-</button>
    <button class="btn_pagination">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: null,
    };
  },
};
</script>

<style scoped>
.pagination_main {
  display: flex;
  gap: 5px;
}
.btn_pagination {
  width: 25px;
  height: 25px;
  cursor: pointer;
  border: 2px solid #00B0D7;
  border-radius: 2px;
}
</style>
