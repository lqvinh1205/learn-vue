<template>
  <div class="pagination_main">
    <button class="btn_pagination" @click="currentPage - 1">-</button>
    <button class="btn_pagination">-</button>
    <button class="btn_pagination">-</button>
    <button class="btn_pagination">-</button>
    <button class="btn_pagination">-</button>
    <button class="btn_pagination" @click="currentPage + 1">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: null,
    };
  },
  methods: {},
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
  border: 2px solid #00b0d7;
  border-radius: 3px;
}
</style>
