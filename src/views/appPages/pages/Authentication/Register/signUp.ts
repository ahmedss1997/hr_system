import Vue from "vue";
import * as models from "@/code/models";
import * as Emp from "@/code/apis/api.employee";
import * as validate from "@/code/validation";

export default Vue.extend({
  name: "App",

  data: () => ({
    newAccount: {} as models.employee,
    dialoges: {
      success: false,
    },
    error: {
      displayError: false,
      msg: "",
      errorCode: 0,
    },
    validationRules: validate.validation,
  }),
  // computed to watch is there is any change on the function
  // and then return the msg
  computed: {
    repeatPasswordRules: {
      // getter
      get: function () {
        return validate.confirmPassword(this.newAccount.password);
      },
      // setter
      set: function () {
        return validate.confirmPassword(this.newAccount.password);
      },
    },
  },

  methods: {
    createAccount: async function () {
      const form = this.$refs.createAccount as HTMLFormElement;
      console.log(form);
      if (form && form.validate()) {
        const result = await Emp.Employee.addEmployee(this.newAccount); // await comes with promise
        console.log(result);

        if (result.ok) {
          this.dialoges.success = true;
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
/*
// واحنا رايحين بتبقى فانكشن واحنا راجعين قيمه المتغير بيبقى 6 اللى هوا نتيجه الفانكشن 
// sign up
let x = sum(3);

// api
sum (a) {
  let i = 2;
  return serverResult(i, a);    //  6
}

// server
serverResult(i, a) {
  return i * a
}
*/
