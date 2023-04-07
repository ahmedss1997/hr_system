import Vue from "vue";
import * as models from "@/code/models";
import * as Emp from "@/code/apis/api.employee";
import * as validate from "@/code/validation";

export default Vue.extend({
  name: "employees",
  data: () => ({
    page: 1,
    showNum: 1,
    absolute: true,
    dialog: false,
    dialog2: false,
    dialog3: false,
    isActive: true,
    menu: false,
    modal: false,
    menu2: false,
    dialoges: {
      success: false,
    },
    error: {
      displayError: false,
      msg: "",
      errorCode: 0,
    },
    validationRules: validate.validation,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    showPerPage: [] as number[],
    infoEmployees: [] as models.employee[],
    itemss: ["Foo", "Bar", "Fizz", "Buzz"],
    newEmployee: {} as models.employee,
    editEmployee: {} as models.employee,
    lists: [
      { title: "Edit", iconn: "mdi-grease-pencil" },
      { title: "Delete", iconn: "mdi-delete-forever-outline" },
    ],
    headers: [
      {
        text: "Name",
        align: "start",
        filterable: false,
        value: "fullName",
      },
      { text: "EmpId", value: "parCode" },
      { text: "Email", value: "email" },
      { text: "Mobile", value: "Price" },
      { text: "Date", value: "Price" },
      { text: "Action", value: "Action", sortable: false },
    ],
  }),
  watch: {
    "$store.state.allEmployees": {
      deep: true,
      immediate: true,
      handler() {
        this.infoEmployees = this.$store.state.allEmployees;
      },
    },
    infoEmployees: {
      deep: true,
      immediate: true,
      handler() {
        const that = this as any;
        that.showPerPage = [];
        if (that.infoEmployees.length >= 5) {
          for (let i = 5; i <= that.infoEmployees.length; i = i * 2) {
            that.showPerPage.push(i);
          }
          if (that.infoEmployees.length % 5 != 0) {
            that.showPerPage.push(that.infoEmployees.length);
          }
        } else {
          that.showPerPage.push(that.infoEmployees.length);
        }
        that.showNum = that.showPerPage[0];
      },
    },
  },
  computed: {
    numPages() {
      return Math.ceil(this.infoEmployees.length / this.showNum);
    },
    repeatPasswordRules: {
      // getter
      get: function () {
        return validate.confirmPassword(this.editEmployee.password);
      },
      // setter
      set: function () {
        return validate.confirmPassword(this.editEmployee.password);
      },
    },
  },
  methods: {
    allEmployees: async function () {
      const result = await Emp.Employee.getEmployees(); // await comes with promise
      if (result.ok && result.body) {
        const body = result.body;
        this.$store.commit("get_employees", body);
      } else {
        // there is something wrong
      }
    },
    addEmployee: async function () {
      const result = await Emp.Employee.addEmployee(this.newEmployee);
      if (result.ok) {
        const body = result.body;
        this.$store.state.allEmployees.push(body);
        this.dialoges.success = true;
        this.dialog = false;
      } else {
        this.error.displayError = true;
        this.error.errorCode = result.errorCode;
        this.error.msg = result.errorMsg;
      }
    },
    sendID(infoEmployee: models.employee) {
      this.editEmployee = Object.assign({}, infoEmployee);
    },
    changeData: async function () {
      const form = this.$refs.editFormBoxes as HTMLFormElement;
      // console.log(form)
      if (form) {
        const result = await Emp.Employee.changeEmployeeData(
          this.editEmployee,
          true
        );
        if (result.ok) {
          const employees = this.$store.state.allEmployees;
          const body = result.body;
          for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === this.editEmployee.id) {
              employees[i] = body;
            }
          }
          this.$store.commit("get_employees", employees);
          this.dialoges.success = true;
          this.dialog2 = false;
        } else {
          this.error.displayError = true;
          this.error.errorCode = result.errorCode;
          this.error.msg = result.errorMsg;
        }
      }
    },
    deleteEmployee: async function (id: number) {
      const result = await Emp.Employee.deleteEmployee(id, true);
      if (result.ok) {
        const employees = this.$store.state.allEmployees.filter(
          (x: models.employee) => x.id != id
        );
        this.$store.commit("get_employees", employees);
        this.dialoges.success = true;
        this.dialog3 = false;
      } else {
        this.error.displayError = true;
        this.error.errorCode = result.errorCode;
        this.error.msg = result.errorMsg;
      }
    },
    togglee() {
      this.isActive = false;
    },
    defalt() {
      this.isActive = true;
    },
  },
  created() {
    this.allEmployees();
  },
});

// :max-width="$vuetify.breakpoint.name != 'lg' && $vuetify.breakpoint.name != 'xl'  ? 384 : 1000"
