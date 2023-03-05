import Vue from "vue";
import * as models from "@/code/models";
import * as Emp from "@/code/apis/api.employee";
import * as validate from "@/code/validation";

export default Vue.extend({
  name: "login",
  data: () => ({
    SameAccount: {} as models.employee,
    error: {
      displayError: false,
      msg: "",
      errorCode: 0,
    },
    validRules: validate.validation,
  }),
  methods: {
    LoginAccount: async function () {
      const form = this.$refs.createAccount as HTMLFormElement;
      if (form && form.validate()) {
        const result = await Emp.Employee.loginEmployee(this.SameAccount); // await comes with promise

        if (result.ok && result.body) {
          //
          const body = result.body as models.iLogin;
          this.$store.commit("get_currentUser", body.user);
          localStorage.setItem("token", body.token);
          this.$router.push("/employees/all");
        } else {
          // there is something wrong
          this.error.displayError = true;
          this.error.errorCode = result.errorCode;
          this.error.msg = result.errorMsg;
        }
      }
    },
  },
});
