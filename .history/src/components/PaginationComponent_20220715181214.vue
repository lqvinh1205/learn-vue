<template>
  <div class="pagination_main">
    <button
      class="btn_pagination"
      @click="currentPage = currentPage - 1"
      :disabled="currentPage < 1 ? true : false"
      :class="{ disabled: currentPage < 1 ? true : false }"
    >
      -
    </button>
    <button
      class="btn_pagination"
      v-for="n in quantityPage"
      :key="n"
      :class="{ active: n == currentPage + 1 }"
      @click="currentPage = n - 1"
    >
      {{ n }}
    </button>
    <button
      class="btn_pagination"
      @click="currentPage = currentPage + 1"
      :disabled="currentPage == quantityPage - 1 ? true : false"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      currentPage: null,
      quantityPage: 0,
    };
  },
  methods: {},
  mounted() {
    this.$store.commit("SET_POSTS_PAGE", this.currentPage);
  },
  watch: {
    "$store.state.posts": {
      immediate: true,
      handler() {
        this.$store.commit("SET_POSTS_PAGE", this.currentPage);
      },
    },
    value() {
      if (this.value.length) {
        if (this.value.length % 10 == 0) {
          this.quantityPage = this.value.length / 10;
        } else {
          this.quantityPage = Math.floor(this.value.length / 10) + 1;
        }
      }
    },
    currentPage() {
      this.$store.commit("SET_POSTS_PAGE", this.currentPage);
    },
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
  border: 2px solid #00b0d7;
  border-radius: 3px;
}
.active {
  border-color: rgb(194, 30, 30);
}
.disabled {
  border-color: rgb(102, 102, 102);
}
</style>
