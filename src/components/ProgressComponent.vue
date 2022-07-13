<template>
  <div class="progress-main">
    <div class="progress" :style="{ width: progress }"></div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      sum: 3,
      progress: 0,
    };
  },
  created() {
    this.progress = (this.step / this.sum) * 100 + "%";
  },
  watch: {
    step(val) {
      this.progress = (val / this.sum) * 100 + "%";
    },
  },
};
</script>

<style scoped>
.progress-main {
  background: white;
  box-shadow: 0px 0px 10px #acacac;
  border-radius: 15px;
  overflow: hidden;
}
.progress {
  height: 20px;
  background: #437fe8;
  transition: ease-in-out 0.5s;
  border-radius: 15px;
}
</style>
