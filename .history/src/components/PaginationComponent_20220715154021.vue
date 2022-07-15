<template>
  <div class="pagination_main">
    <button class="btn_pagination" @click="currentPage - 1">-</button>
    <button class="btn_pagination" v-for="n in quantityPage" :key="n">
      {{ n }}
    </button>
    <button class="btn_pagination" @click="currentPage + 1">+</button>
    {{postAmount}}
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
  computed: {	
    postAmount() {
      //   return this.$store.state.posts;
      return this.$store.state.posts.length;
    },
  },
//   created() {
// 	console.log(this.$store.state.posts.length);
//   },
  //   mounted() {
  //     // console.log(this.$store.state.posts.length);

  //     if (this.value.length % 10 == 0) {
  //       this.quantityPage = this.data.length / 10;
  //     } else {
  //       this.quantityPage = Math.floor(this.value.length) / 10 + 1;
  //     }
  //   },
  //   watch: {
  //     value() {
  //       if (this.value.length % 10 == 0) {
  //         this.quantityPage = this.value.length / 10;
  //       } else {
  //         this.quantityPage = Math.floor(this.value.length) / 10 + 1;
  //       }
  //     },
  //   },
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
