<template>
  <div class="step-form">
    <div class="step-form-main">
      <ProgressComponentVue :step="actived" />
      <BoxShadowVue>
        <button class="btn-step">
          <span class="numb-step">1</span>
          <span>About you</span>
        </button>
        <button class="btn-step">
          <span class="numb-step">2</span>
          <span>About your Company</span>
        </button>
        <button class="btn-step">
          <span class="numb-step">3</span>
          <span>Finishing Up</span>
        </button>
      </BoxShadowVue>
      <BoxShadowVue v-if="actived === 1" class="fade-in">
        <InputField
          name="Full Name"
          @blur="validate"
          @input="multilForm.form1.fullName"
          fullName=""
        />
        <input type="text" v-model="multilForm.form1.fullName">
        <!-- {{ multilForm.form1.fullName }} -->
        <InputField
          name="Your Email"
          type="email"
          @blur="validate"
          :v-model="multilForm.form1.email"
        />
      </BoxShadowVue>
      <BoxShadowVue v-if="actived === 2" class="fade-in">
        <InputField name="Your Company Name" />
        <InputField name="Number of Employees" type="number" />
      </BoxShadowVue>
      <div class="footer">
        <ButtonCustom title="Previous" background="#72e6b1" @click="previous" />
        <ButtonCustom title="Next" @click="next" />
      </div>
    </div>
    {{ multilForm.form1.fullName }}
  </div>
</template>
<script>
import ProgressComponentVue from "@/components/ProgressComponent.vue";
import BoxShadowVue from "@/components/BoxShadow.vue";
import InputField from "@/components/InputField.vue";
import ButtonCustom from "@/components/ButtonCustom.vue";
export default {
  name: "step-form",
  components: {
    ProgressComponentVue,
    BoxShadowVue,
    InputField,
    ButtonCustom,
  },
  data() {
    return {
      actived: 1,
      multilForm: {
        form1: {
          fullName: "le vinh",
          email: "",
        },
        form2: {
          company: "",
          numberEmployee: null,
        },
      },
    };
  },
  computed: {
    name() {
      return this.$store.state.name;
    },
  },
  methods: {
    previous() {
      if (this.actived === 1) return;
      return (this.actived = this.actived - 1);
    },
    next() {
      return (this.actived = this.actived + 1);
    },
    validate(e) {
      if (e.type === "text") {
        console.log(e);
      }
    },
  },
};
</script>
<style scoped>
.step-form {
  display: flex;
  justify-content: center;
  background: #f5f7fb;
  min-height: 100vh;
}
.step-form-main {
  margin-top: 50px;
  width: 900px;
}
.btn-step {
  background: #f3f3f3;
  border: 2px solid #9fbcd7;
  padding: 8px 20px;
  display: flex;
  justify-items: center;
  gap: 5px;
  color: #8f8284;
  font-size: 14px;
  font-weight: 500;
  border-radius: 12px;
  line-height: 24px;
}
.numb-step {
  border-radius: 50%;
  background: #969899;
  color: #f7f7f7;
  line-height: 24px;
  width: 24px;
  height: 24px;
}
.footer {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  gap: 16px;
}
.fade-in {
  /* transition: ease-in-out 3s; */
  animation: fadeIn 2s backwards alternate;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
