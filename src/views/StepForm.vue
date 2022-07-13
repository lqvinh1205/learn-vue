<template>
  <div class="step-form">
    <div class="step-form-main">
      <ProgressComponentVue :step="actived" />
      <BoxShadowVue>
        <button
          :class="{ 'btn-step': true, active: actived == 1, done: actived > 1 }"
        >
          <span class="numb-step">1</span>
          <span>About you</span>
        </button>
        <button
          :class="{ 'btn-step': true, active: actived == 2, done: actived > 2 }"
        >
          <span class="numb-step">2</span>
          <span>About your Company</span>
        </button>
        <button :class="{ 'btn-step': true, active: actived == 3 }">
          <span class="numb-step">3</span>
          <span>Finishing Up</span>
        </button>
      </BoxShadowVue>
      <BoxShadowVue v-show="actived === 1" class="fade-in">
        <label for="name" class="input">
          <span class="label-name">Full Name</span>
          <input
            type="text"
            id="name"
            v-model="multilForm.fullName"
            @input="validate('fullName')"
            @blur="validate('fullName')"
            class="input-flied"
          />
          <div v-for="(item, index) in msg_validate.name.message" :key="index">
            <span class="error" v-if="item.type === msg_validate.name.error">
              {{ item.msg }}
            </span>
          </div>
        </label>
        <label for="email" class="input">
          <span class="label-name">Your Email</span>
          <input
            type="email"
            id="email"
            v-model="multilForm.email"
            class="input-flied"
            @input="validate('email')"
            @blur="validate('email')"
          />
          <div v-for="(item, index) in msg_validate.email.message" :key="index">
            <span class="error" v-if="item.type === msg_validate.email.error">
              {{ item.msg }}
            </span>
          </div>
        </label>
      </BoxShadowVue>
      <BoxShadowVue v-show="actived === 2" class="fade-in">
        <label for="company" class="input">
          <span class="label-name">Your Company Name </span>
          <input
            id="company"
            v-model="multilForm.company"
            class="input-flied"
            @input="validate('company')"
            @blur="validate('company')"
          />
          <div
            v-for="(item, index) in msg_validate.company.message"
            :key="index"
          >
            <span class="error" v-if="item.type === msg_validate.company.error">
              {{ item.msg }}
            </span>
          </div>
        </label>
        <label for="numberEmployee" class="input">
          <span class="label-name">Number of Employees </span>
          <input
            id="numberEmployee"
            v-model="multilForm.numberEmployee"
            class="input-flied"
            @input="validate('numberEmployee')"
            @blur="validate('numberEmployee')"
          />
          <div
            v-for="(item, index) in msg_validate.numberEmployee.message"
            :key="index"
          >
            <span
              class="error"
              v-if="item.type === msg_validate.numberEmployee.error"
            >
              {{ item.msg }}
            </span>
          </div>
        </label>
      </BoxShadowVue>
      <BoxShadowVue v-show="actived === 3" class="fade-in">
        <div
          class="selected"
          @click="
            () => {
              showSelected = !showSelected;
              validate('youHearAboutUs');
            }
          "
        >
          <span>{{ multilForm.youHearAboutUs || "-- Choose anwser --" }} </span>
          <div class="selected-option" v-show="showSelected">
            <div @click="multilForm.youHearAboutUs = 'Friend'">Friend</div>
            <div @click="multilForm.youHearAboutUs = 'Facebook'">Facebook</div>
            <div @click="multilForm.youHearAboutUs = 'Website'">Website</div>
          </div>
        </div>
        <div
          v-for="(item, index) in msg_validate.youHearAboutUs.message"
          :key="index"
        >
          <span
            class="error"
            v-if="item.type === msg_validate.youHearAboutUs.error"
          >
            {{ item.msg }}
          </span>
        </div>
        <div class="checked">
          <input
            type="checkbox"
            v-model="multilForm.checked"
            id="checked"
            @change="validate('checked')"
            @blur="validate('checked')"
          />
          <label for="checked">I accept terms & conditions</label>
        </div>
        <div v-for="(item, index) in msg_validate.checked.message" :key="index">
          <span class="error" v-if="item.type === msg_validate.checked.error">
            {{ item.msg }}
          </span>
        </div>
      </BoxShadowVue>
      <div class="footer" v-if="actived < 3">
        <ButtonCustom title="Previous" background="#72e6b1" @click="previous" />
        <ButtonCustom title="Next" @click="next" />
      </div>
      <div class="footer" v-if="actived > 2">
        <ButtonCustom title="Reset" background="#72e6b1" @click="reset" />
        <ButtonCustom title="Send" @click="submit" />
      </div>
    </div>
  </div>
</template>
<script>
import ProgressComponentVue from "@/components/ProgressComponent.vue";
import BoxShadowVue from "@/components/BoxShadow.vue";
import ButtonCustom from "@/components/ButtonCustom.vue";
export default {
  name: "step-form",
  components: {
    ProgressComponentVue,
    BoxShadowVue,
    ButtonCustom,
  },
  data() {
    return {
      actived: 1,
      showSelected: false,
      multilForm: {
        fullName: "",
        email: "",
        company: "",
        numberEmployee: null,
        youHearAboutUs: "",
        checked: false,
      },
      msg_validate: {
        name: {
          message: [{ type: "required", msg: "The field is required!" }],
          error: null,
        },
        email: {
          message: [
            { type: "required", msg: "The field is required!" },
            { type: "email", msg: "The field must be email!" },
          ],
          error: null,
        },
        company: {
          message: [{ type: "required", msg: "The field is required!" }],
          error: null,
        },
        numberEmployee: {
          message: [{ type: "required", msg: "The field is required!" }],
          error: null,
        },
        youHearAboutUs: {
          message: [{ type: "required", msg: "The field is required!" }],
          error: null,
        },
        checked: {
          message: [{ type: "required", msg: "The field is required!" }],
          error: null,
        },
      },
    };
  },
  methods: {
    previous() {
      if (this.actived === 1) return;
      return (this.actived = this.actived - 1);
    },
    next() {
      this.validate();
      if (
        this.msg_validate.email.error == true &&
        this.msg_validate.name.error == true
      ) {
        this.actived = 2;
      }
      if (
        this.msg_validate.company.error == true &&
        this.msg_validate.numberEmployee.error == true
      ) {
        this.actived = 3;
      }
    },
    submit() {
      this.validate();
      if (
        this.multilForm.youHearAboutUs != "" &&
        this.multilForm.checked != false
      ) {
        window.alert(JSON.stringify(this.multilForm));
      }
    },
    reset() {
      this.actived = 1;
      this.multilForm = {
        fullName: "",
        email: "",
        company: "",
        numberEmployee: null,
        youHearAboutUs: "",
        checked: false,
      };
      this.msg_validate.name.error = null;
      this.msg_validate.email.error = null;
      this.msg_validate.numberEmployee.error = null;
      this.msg_validate.company.error = null;
      this.msg_validate.youHearAboutUs.error = null;
      this.msg_validate.checked.error = null;
    },
    validate(key) {
      switch (key) {
        case "fullName":
          if (this.multilForm.fullName === "") {
            return (this.msg_validate.name.error = "required");
          } else this.msg_validate.name.error = true;
          break;
        case "email":
          if (this.multilForm.email === "") {
            return (this.msg_validate.email.error = "required");
          } else if (!this.multilForm.email.match(/\S+@\S+\.\S+/)) {
            return (this.msg_validate.email.error = "email");
          } else this.msg_validate.email.error = true;
          break;
        case "company":
          if (this.multilForm.company === "") {
            return (this.msg_validate.company.error = "required");
          } else this.msg_validate.company.error = true;
          break;
        case "numberEmployee":
          if (this.multilForm.numberEmployee === null) {
            return (this.msg_validate.numberEmployee.error = "required");
          } else this.msg_validate.numberEmployee.error = true;
          break;
        case "youHearAboutUs":
          if (this.multilForm.youHearAboutUs === "") {
            return (this.msg_validate.youHearAboutUs.error = "required");
          } else this.msg_validate.youHearAboutUs.error = true;
          break;
        case "checked":
          if (this.multilForm.checked === false) {
            return (this.msg_validate.checked.error = "required");
          } else this.msg_validate.checked.error = true;
          break;
        default:
          if (this.actived === 1) {
            if (this.multilForm.fullName === "") {
              this.msg_validate.name.error = "required";
            }
            if (this.multilForm.email === "") {
              this.msg_validate.email.error = "required";
            } else if (!this.multilForm.email.match(/\S+@\S+\.\S+/)) {
              this.msg_validate.email.error = "email";
            }
          }
          if (this.actived === 2) {
            if (this.multilForm.company === "") {
              this.msg_validate.company.error = "required";
            }
            if (this.multilForm.numberEmployee === null) {
              this.msg_validate.numberEmployee.error = "required";
            }
          }
          if (this.actived === 3) {
            if (this.multilForm.youHearAboutUs === "") {
              this.msg_validate.youHearAboutUs.error = "required";
            }
            if (this.multilForm.checked === false) {
              this.msg_validate.checked.error = "required";
            }
          }
          break;
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
  border: 2px solid transparent;
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
.selected {
  border: 1px solid #acacac;
  border-radius: 4px;
  padding: 10px 12px;
  position: relative;
  width: 100%;
  color: #2c3e50 !important;
  cursor: pointer;
}
.selected-option {
  position: absolute;
  content: "";
  top: 120%;
  left: 0;
  right: 0;
  background: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 10px 0 #acacac;
  overflow: hidden;
}
.selected-option div {
  width: 100%;
  display: flex;
  padding: 15px 20px;
  align-content: center;
}
.selected-option div:hover {
  background: #ccc;
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

.input {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.label-name {
  font-size: 16px;
  margin-bottom: 8px;
}
.input-flied {
  width: 100%;
  height: 40px;
  background: #fff;
  border: 1px solid #4e4e4e;
  color: #586068;
  padding: 8px 16px;
  border-radius: 4px;
}
.input-flied:focus {
  border: 3px solid #9dcaeb;
  /* border: 2px solid #aa4651; */
  /* box-shadow: 0 0 4px 0 #f4b6c1; */
  outline: none;
}

.error {
  margin-top: 8px;
  color: #aa4651;
  font-size: 14px;
}
.checked {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
}
.active {
  border-color: #9fbcd7;
}
.done {
  border-color: #185b02;
}
</style>
