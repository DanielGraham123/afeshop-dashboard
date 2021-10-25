<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <b-col lg="2"></b-col>
      <b-col lg="8">
        <div class="d-block text-center">
          <afeshop-logo></afeshop-logo>
        </div>

        <form-wizard-icon class="d-block" />
      </b-col>
      <b-col lg="2"></b-col>
    </b-row>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import {
  BRow,
  BCol,
  BLink,
  BFormGroup,
  BFormInput,
  BInputGroupAppend,
  BInputGroup,
  BFormCheckbox,
  BCardText,
  BCardTitle,
  BImg,
  BForm,
  BButton,
} from "bootstrap-vue";
import { required, email } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import store from "@/store/index";
import FormWizardIcon from "./FormWizardIcon.vue";
import AfeshopLogo from "@/components/AfeshopLogo.vue";

export default {
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    ValidationProvider,
    ValidationObserver,
    FormWizardIcon,
    AfeshopLogo,
  },

  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: "",
      password: "",
      userEmail: "",
      sideImg: require("@/assets/images/pages/register-v2.svg"),
      // validation rulesimport store from '@/store/index'
      required,
      email,
    };
  },

  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === "dark") {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require("@/assets/images/pages/register-v2-dark.svg");
        return this.sideImg;
      }
      return this.sideImg;
    },
  },
  methods: {
    validationForm() {
      //   this.$refs.loginValidation.validate().then((success) => {
      //     if (success) {
      //       this.$toast({
      //         component: ToastificationContent,
      //         props: {
      //           title: "Form Submitted",
      //           icon: "EditIcon",
      //           variant: "success",
      //         },
      //       });
      //     }
      //   });
    },
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
@import "@core/scss/vue/libs/vue-wizard.scss";
@import "@core/scss/vue/libs/vue-select.scss";

.auth-wrapper.auth-v2 .brand-logo {
  position: relative !important;
}
</style>