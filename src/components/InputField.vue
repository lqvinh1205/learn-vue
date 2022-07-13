<template>
  <label :for="name" class="input">
    <span class="label-name">{{ name }}</span>
    <input
      :type="type"
      :name="name"
      v-model="content"
      @input="handleInput"
    />
    <div v-if="error">
      <div v-for="(item, index) in error.message" :key="index">
        <span class="error" v-if="item.type === error.errorType">
          {{ item.msg }}
        </span>
      </div>
    </div>
  </label>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "Name",
    },
    error: {
      message: [],
      errorType: null,
    },
    blur: {
      type: Function,
    },
    type: {
      type: String,
      default: "text",
    },
    model: null,
    value: {
      type: [String, Number],
    },
  },
  data() {
    return {
      content: this.value,
      validate: [],
    };
  },
  mounted() {
    this.error.message.forEach((element) => {
      if (!this.validate.includes(element.type)) {
        this.validate = [...this.validate, element.type];
      }
    });
  },
  methods: {
    blurFn() {
      this.$emit("blur", {
        value: this.content,
        validate: this.validate,
        model: this.model,
      });
    },
    handleInput() {
      this.blurFn();
      this.$emit("input", { content: this.content, model: this.model });
    },
  },
};
</script>
<style scoped>
.input {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.label-name {
  font-size: 16px;
  margin-bottom: 8px;
}
input {
  width: 100%;
  height: 40px;
  background: #fff;
  border: 1px solid #aa4651;
  box-shadow: 0 0 4px 0 #f4b6c1;
  color: #586068;
  padding: 8px 16px;
  border-radius: 4px;
}
.error {
  margin-top: 8px;
  color: #aa4651;
  font-size: 14px;
}
</style>
