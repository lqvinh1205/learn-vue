<template>
  <div class="box-shadow">
    <slot></slot>
  </div>
</template>

<style scoped>
.box-shadow {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  background: white;
  margin: 20px 0;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px #acacac;
  gap: 10px;
}
</style>
