<template>
  <div class="pagination_main">
    <button
      class="btn_pagination"
      @click="currentPage = currentPage - 1"
      :disabled="currentPage < 1 ? true : false"
    >
      -
    </button>
    <button
      class="btn_pagination"
      v-for="n in quantityPage"
      :key="n"
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
      currentPage: 1,
      quantityPage: 0,
    };
  },
  methods: {},

  // mounted() {
  //   // console.log(this.$store.state.posts.length);
  //   if (this.$store.state.posts.length) {
  //     if (this.$store.state.posts.length % 10 == 0) {
  //       this.quantityPage = this.$store.state.posts.length / 10;
  //     } else {
  //       this.quantityPage = Math.floor(this.$store.state.posts.length) / 10 + 1;
  //     }
  //   }
  // },
  watch: {
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
      const posts = this.value.slice(
        this.currentPage * 10,
        (this.currentPage + 1) * 10
      );
      this.$store.commit("SET_POSTS_PAGE", posts);
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
</style>
