<script>
import ButtonVue from "@/components/Button.vue";
import ProvinceItemVue from "@/components/ProvinceItem.vue";
import { convert_vi_to_en } from "@/ultils/ConvertString.js";

export default {
  name: "ProvinceView",
  components: {
    OptionSelect: ProvinceItemVue,
    ButtonCustomer: ButtonVue,
  },
  data() {
    return {
      list: [],
      listFilter: [],
      listChecked: [],
      show: false,
      key: "",
      debounceFn: null,
      result: [],
    };
  },
  async mounted() {
    this.list = await (
      await fetch("https://provinces.open-api.vn/api/")
    ).json();
    this.listFilter = this.list;
  },
  methods: {
    handleChecked(code) {
      const index = this.listChecked.indexOf(code);
      if (index !== -1) {
        this.listChecked.splice(index, 1);
      } else {
        this.listChecked.push(code);
      }
    },
    handleSubmit() {
      const data = [];
      this.list.forEach((el) => {
        this.listChecked.forEach((i) => {
          if (el.code === i) data.push(el);
        });
      });
      this.result = data;
      this.show = false;
    },

    handleSearch() {
      clearTimeout(this.debounceFn);
      this.debounceFn = setTimeout(() => {
        this.listFilter = this.list.filter(
          (item) =>
            convert_vi_to_en(item.name.toLowerCase().trim()).search(
              convert_vi_to_en(this.key.toLowerCase().trim())
            ) !== -1
        );
        if (this.key == "") this.listFilter = this.list;
      }, 500);
    },
    removeItem(id) {
      this.result = this.result.filter((item) => item.code !== id);
      this.listChecked = this.listChecked.filter((item) => item !== id);
    },
    emptyResult() {
      this.result = [];
      this.listChecked = [];
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="main">
      <div class="search">
        <input
          type="text"
          class="input"
          v-model="key"
          placeholder="Chọn tỉnh thành"
          @focus="show = true"
          @input="handleSearch"
        />
        <button class="btn-search" @click="show = !show">
          <img src="@/assets/icon/Vector132.png" alt="" />
        </button>
      </div>
      <div
        v-show="show && list.length"
        :class="{ option_box: true, to_hide: !show }"
      >
        <div class="list-province">
          <OptionSelect
            :data="listFilter"
            :listChecked="listChecked"
            @handle-check="handleChecked"
          />
        </div>
        <div class="footer">
          <ButtonCustomer
            title="Đồng ý"
            font="bold"
            :background="listChecked.length ? '' : '#acacac'"
            :disabled="listChecked.length ? false : true"
            @handleClick="handleSubmit"
          />
          <ButtonCustomer
            title="Hủy"
            background="none"
            color="#007BC3"
            @handleClick="emptyResult"
          />
        </div>
      </div>
      <div class="result" v-if="!show && result.length">
        <span v-for="item in result" :key="item.code" class="result-items"
          ><span class="result-text">{{ item.name }}</span>
          <button @click="removeItem(item.code)" class="close">
            <img src="@/assets/icon/close.png" alt="" />
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
}
.main {
  width: 480px;
  padding-top: 10%;
}

.search {
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid #acacac;
  border-radius: 4px;
  overflow: hidden;
}
.btn-search {
  background: none;
  border-left: none;
  cursor: pointer;
  height: 50px;
  width: 50px;
  border: none;
}
.input {
  width: 100%;
  height: 50px;
  border-right: none;
  padding-left: 10px;
  border: none;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
}
.input:focus {
  outline: none;
  border-right: none;
}
.search:focus-within {
  border: 1.2px solid #007bc3;
  box-shadow: 0px 0px 4px #2c9edf;
}
.search:hover .option_box {
  transform: translateY(0%);
}
.option_box {
  margin-top: 10px;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 3px #acacac;
  padding: 10px;
  position: relative;
  animation: fadeIn 0.2s linear backwards 0.4s;
}
.to_hide {
  animation: fadeOut 0.2s linear backwards 0.4s;
}

.list-province {
  max-height: 350px;
  overflow-y: auto;
}
.footer {
  padding: 10px;
  display: flex;
  gap: 5px;
}
.result {
  border: 1px solid #acacac;
  border-radius: 4px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 8px;
}
.result-items {
  border: 1px solid #acacac;
  padding: 5px 7px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 10px;
  font-size: 16px;
}
.close {
  background: none;
  border: none;
  cursor: pointer;
}
.result-text {
  padding: 0 10px;
}
@keyframes fadeIn {
  0% {
    transform: translateY(-10%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-10%);
    opacity: 0;
  }
}
</style>
